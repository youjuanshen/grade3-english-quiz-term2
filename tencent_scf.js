// 腾讯云 SCF 云函数：飞书成绩提交代理（简化版）
'use strict';

const https = require('https');

const LARK_APP_ID = "cli_a93bc13364f88060";
const LARK_APP_SECRET = "om7RQokYqVlyQJOlIfdatcuFVQw85OIj";
const LARK_APP_TOKEN = "Oy1dbiDS7aLIS8sqI1ZumqJSt8b";
const LARK_TABLE_ID = "tblKpStf6IgveRvP";

function post(hostname, path, data, token) {
    return new Promise(function(resolve, reject) {
        var body = JSON.stringify(data);
        var options = {
            hostname: hostname,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(body)
            }
        };
        if (token) {
            options.headers['Authorization'] = 'Bearer ' + token;
        }
        var req = https.request(options, function(res) {
            var chunks = [];
            res.on('data', function(chunk) { chunks.push(chunk); });
            res.on('end', function() {
                try {
                    resolve(JSON.parse(Buffer.concat(chunks).toString()));
                } catch(e) {
                    reject(new Error('JSON parse error: ' + e.message));
                }
            });
        });
        req.on('error', function(e) { reject(e); });
        req.setTimeout(30000, function() {
            req.destroy(new Error('Request timeout'));
        });
        req.write(body);
        req.end();
    });
}

exports.main_handler = async function(event, context) {
    var corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers: corsHeaders, body: '' };
    }

    try {
        var bodyStr = event.body || '{}';
        if (event.isBase64Encoded) {
            bodyStr = Buffer.from(bodyStr, 'base64').toString('utf8');
        }
        var scoreData = JSON.parse(bodyStr);

        // Step 1: 获取飞书 Token
        var tokenResult = await post(
            'open.feishu.cn',
            '/open-apis/auth/v3/tenant_access_token/internal',
            { app_id: LARK_APP_ID, app_secret: LARK_APP_SECRET },
            null
        );

        if (!tokenResult.tenant_access_token) {
            throw new Error('Token fetch failed: ' + JSON.stringify(tokenResult));
        }
        var token = tokenResult.tenant_access_token;

        // Step 2: 提交成绩
        var fields = {
            "时间": String(scoreData.time || ''),
            "姓名": String(scoreData.studentName || ''),
            "课程": String(scoreData.course || ''),
            "用时": String(scoreData.duration || ''),
            "总分": Number(scoreData.total) || 0,
            "正确率": String(scoreData.accuracy || '0%'),
            "听力": Number(scoreData.listening) || 0,
            "阅读": Number(scoreData.reading) || 0,
            "写作": Number(scoreData.writing) || 0,
            "口语": Number(scoreData.speaking) || 0
        };

        var result = await post(
            'open.feishu.cn',
            '/open-apis/bitable/v1/apps/' + LARK_APP_TOKEN + '/tables/' + LARK_TABLE_ID + '/records',
            { fields: fields },
            token
        );

        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify(result)
        };

    } catch(err) {
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({ code: -1, msg: err.message })
        };
    }
};
