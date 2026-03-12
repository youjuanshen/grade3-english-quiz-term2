// 腾讯云 SCF 云函数：飞书成绩提交代理
// 用于替代被墙的 Cloudflare Workers

const https = require('https');

// 飞书配置
const LARK_APP_ID = "cli_a93bc13364f88060";
const LARK_APP_SECRET = "om7RQokYqVlyQJOlIfdatcuFVQw85OIj";
const LARK_APP_TOKEN = "Oy1dbiDS7aLIS8sqI1ZumqJSt8b";
const LARK_TABLE_ID = "tblKpStf6IgveRvP";

// 简易 HTTPS 请求封装
function httpsRequest(url, method, headers, body) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const options = {
            hostname: urlObj.hostname,
            path: urlObj.pathname + urlObj.search,
            method: method,
            headers: headers
        };
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        if (body) req.write(body);
        req.end();
    });
}

exports.main_handler = async (event, context) => {
    // CORS 头
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    // 处理 OPTIONS 预检
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers: corsHeaders, body: '' };
    }

    try {
        // 解析请求体
        let bodyStr = event.body || '{}';
        if (event.isBase64Encoded) {
            bodyStr = Buffer.from(bodyStr, 'base64').toString('utf8');
        }
        const scoreData = JSON.parse(bodyStr);

        // 1. 获取飞书 Token（使用国内 feishu.cn 域名）
        const tokenBody = JSON.stringify({
            app_id: LARK_APP_ID,
            app_secret: LARK_APP_SECRET
        });
        const tokenRes = await httpsRequest(
            'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal',
            'POST',
            { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(tokenBody) },
            tokenBody
        );
        const tokenData = JSON.parse(tokenRes);
        const token = tokenData.tenant_access_token;

        // 2. 提交成绩到飞书多维表格
        const payload = JSON.stringify({
            fields: {
                "时间": scoreData.time || "",
                "姓名": scoreData.studentName || "",
                "课程": scoreData.course || "",
                "用时": scoreData.duration || "",
                "总分": Number(scoreData.total) || 0,
                "正确率": scoreData.accuracy || "0%",
                "听力": Number(scoreData.listening) || 0,
                "阅读": Number(scoreData.reading) || 0,
                "写作": Number(scoreData.writing) || 0,
                "口语": Number(scoreData.speaking) || 0
            }
        });

        const submitUrl = `https://open.feishu.cn/open-apis/bitable/v1/apps/${LARK_APP_TOKEN}/tables/${LARK_TABLE_ID}/records`;
        const submitRes = await httpsRequest(
            submitUrl,
            'POST',
            {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            },
            payload
        );

        const result = JSON.parse(submitRes);
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify(result)
        };

    } catch (err) {
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({ code: -1, msg: err.message })
        };
    }
};
