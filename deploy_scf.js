/**
 * 腾讯云 SCF 函数代码更新脚本
 * 使用 UpdateFunctionCode API 直接上传 zip 包
 */
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SECRET_ID = 'AKID8A0fCZn0HWcfaXKwMbouoVyg7QYTPDsy';
const SECRET_KEY = '3uYDk5D8qNixtc9Uc1KRVP7mqpfLrNPH';
const REGION = 'ap-guangzhou';
const FUNCTION_NAME = 'lark-proxy';

// 读取 tencent_scf.js，打包为 zip（重命名为 index.js）
const srcPath = path.join(__dirname, 'tencent_scf.js');
const zipPath = path.join(__dirname, '_deploy_tmp.zip');

// 创建 zip（路径加引号防止空格问题）
const dir = __dirname;
execSync(`cp "${dir}/tencent_scf.js" "${dir}/index.js" && zip -j "${zipPath}" "${dir}/index.js" && rm "${dir}/index.js"`);

const zipBase64 = fs.readFileSync(zipPath).toString('base64');
fs.unlinkSync(zipPath);

// TC3 签名
function sign(secretKey, date, service, str) {
    const kDate = crypto.createHmac('sha256', 'TC3' + secretKey).update(date).digest();
    const kService = crypto.createHmac('sha256', kDate).update(service).digest();
    const kSigning = crypto.createHmac('sha256', kService).update('tc3_request').digest();
    return crypto.createHmac('sha256', kSigning).update(str).digest('hex');
}

function callApi(action, payload) {
    return new Promise((resolve, reject) => {
        const service = 'scf';
        const host = 'scf.tencentcloudapi.com';
        const timestamp = Math.floor(Date.now() / 1000);
        const date = new Date(timestamp * 1000).toISOString().slice(0, 10);
        const body = JSON.stringify(payload);

        const hashedPayload = crypto.createHash('sha256').update(body).digest('hex');
        const canonicalRequest = `POST\n/\n\ncontent-type:application/json\nhost:${host}\n\ncontent-type;host\n${hashedPayload}`;
        const credentialScope = `${date}/${service}/tc3_request`;
        const hashedCanonical = crypto.createHash('sha256').update(canonicalRequest).digest('hex');
        const stringToSign = `TC3-HMAC-SHA256\n${timestamp}\n${credentialScope}\n${hashedCanonical}`;
        const signature = sign(SECRET_KEY, date, service, stringToSign);
        const authorization = `TC3-HMAC-SHA256 Credential=${SECRET_ID}/${credentialScope}, SignedHeaders=content-type;host, Signature=${signature}`;

        const options = {
            hostname: host,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Host': host,
                'Authorization': authorization,
                'X-TC-Action': action,
                'X-TC-Timestamp': String(timestamp),
                'X-TC-Version': '2018-04-16',
                'X-TC-Region': REGION,
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => { try { resolve(JSON.parse(data)); } catch(e) { reject(e); } });
        });
        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

async function main() {
    console.log('📦 正在上传代码到腾讯云函数...');
    const result = await callApi('UpdateFunctionCode', {
        FunctionName: FUNCTION_NAME,
        Namespace: 'default',
        Handler: 'index.main_handler',
        ZipFile: zipBase64,
    });
    console.log('API 返回:', JSON.stringify(result, null, 2));
    if (result.Response && !result.Response.Error) {
        console.log('✅ 部署成功！');
    } else {
        console.log('❌ 部署失败，查看上方错误信息');
    }
}

main().catch(console.error);
