// 腾讯云 SCF 云函数：飞书成绩提交 + 查询代理
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
        if (token) { options.headers['Authorization'] = 'Bearer ' + token; }
        var req = https.request(options, function(res) {
            var chunks = [];
            res.on('data', function(chunk) { chunks.push(chunk); });
            res.on('end', function() {
                try { resolve(JSON.parse(Buffer.concat(chunks).toString())); }
                catch(e) { reject(new Error('JSON parse error')); }
            });
        });
        req.on('error', function(e) { reject(e); });
        req.setTimeout(30000, function() { req.destroy(new Error('timeout')); });
        req.write(body);
        req.end();
    });
}

function get(hostname, path, token) {
    return new Promise(function(resolve, reject) {
        var options = {
            hostname: hostname,
            path: path,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        };
        var req = https.request(options, function(res) {
            var chunks = [];
            res.on('data', function(chunk) { chunks.push(chunk); });
            res.on('end', function() {
                try { resolve(JSON.parse(Buffer.concat(chunks).toString())); }
                catch(e) { reject(new Error('JSON parse error')); }
            });
        });
        req.on('error', function(e) { reject(e); });
        req.setTimeout(30000, function() { req.destroy(new Error('timeout')); });
        req.end();
    });
}

// 获取飞书 Token
async function getToken() {
    var tk = await post('open.feishu.cn', '/open-apis/auth/v3/tenant_access_token/internal',
        { app_id: LARK_APP_ID, app_secret: LARK_APP_SECRET }, null);
    if (!tk.tenant_access_token) throw new Error('no token: ' + JSON.stringify(tk));
    return tk.tenant_access_token;
}

exports.main_handler = async function(event, context) {
    var cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers: cors, body: '' };

    try {
        var bodyStr = event.body || '{}';
        if (event.isBase64Encoded) bodyStr = Buffer.from(bodyStr, 'base64').toString('utf8');
        var d = JSON.parse(bodyStr);

        var token = await getToken();

        // ========== 查询模式 ==========
        if (d.action === 'query') {
            var course = d.course || '';
            var days = parseInt(d.days) || 7;
            var cutoff = Date.now() - days * 24 * 60 * 60 * 1000;

            // 读取所有记录（最多500条）
            var allRecords = [];
            var pageToken = '';
            var maxPages = 5;
            for (var i = 0; i < maxPages; i++) {
                var url = '/open-apis/bitable/v1/apps/' + LARK_APP_TOKEN +
                    '/tables/' + LARK_TABLE_ID + '/records?page_size=100' +
                    (pageToken ? '&page_token=' + pageToken : '');
                var resp = await get('open.feishu.cn', url, token);
                if (resp.data && resp.data.items) {
                    allRecords = allRecords.concat(resp.data.items);
                }
                if (!resp.data || !resp.data.has_more) break;
                pageToken = resp.data.page_token || '';
            }

            // 返回全部记录，由前端做智能课程匹配
            // （飞书里的课程名是长文本如 "[下学期] Unit 1 Lesson 1..."，服务端无法直接与 "U1L1" 匹配）
            var allMapped = allRecords.map(function(item) {
                var f = item.fields || {};
                return {
                    studentName: String(f['姓名'] || ''),
                    course:      String(f['课程'] || ''),
                    time:        String(f['时间'] || '')
                };
            }).filter(function(r) { return r.studentName !== ''; });

            return {
                statusCode: 200,
                headers: cors,
                body: JSON.stringify({ code: 0, data: allMapped })
            };
        }

        // ========== 提交模式（默认）==========
        var fields = {
            "时间": String(d.time || ''),
            "姓名": String(d.studentName || ''),
            "课程": String(d.course || ''),
            "用时": String(d.duration || ''),
            "总分": Number(d.total) || 0,
            "正确率": String(d.accuracy || '0%'),
            "听力": Number(d.listening) || 0,
            "阅读": Number(d.reading) || 0,
            "写作": Number(d.writing) || 0,
            "口语": Number(d.speaking) || 0
        };

        var result = await post('open.feishu.cn',
            '/open-apis/bitable/v1/apps/' + LARK_APP_TOKEN + '/tables/' + LARK_TABLE_ID + '/records',
            { fields: fields }, token);

        return { statusCode: 200, headers: cors, body: JSON.stringify(result) };

    } catch(err) {
        return {
            statusCode: 200,
            headers: cors,
            body: JSON.stringify({ code: -1, msg: err.message })
        };
    }
};
