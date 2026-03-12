// ============================================================
// Google Apps Script: 飞书成绩提交代理
// 部署方式：Google Apps Script → 部署为 Web 应用
// ============================================================

// 飞书配置
var LARK_APP_ID = "cli_a93bc13364f88060";
var LARK_APP_SECRET = "om7RQokYqVlyQJOlIfdatcuFVQw85OIj";
var LARK_APP_TOKEN = "Oy1dbiDS7aLIS8sqI1ZumqJSt8b";
var LARK_TABLE_ID = "tblKpStf6IgveRvP";

// 处理 POST 请求
function doPost(e) {
  try {
    var scoreData = JSON.parse(e.postData.contents);
    
    // 1. 获取飞书 Token
    var tokenRes = UrlFetchApp.fetch('https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal', {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({
        app_id: LARK_APP_ID,
        app_secret: LARK_APP_SECRET
      })
    });
    var tokenData = JSON.parse(tokenRes.getContentText());
    var token = tokenData.tenant_access_token;
    
    // 2. 提交成绩到飞书多维表格
    var url = 'https://open.larksuite.com/open-apis/bitable/v1/apps/' + LARK_APP_TOKEN + '/tables/' + LARK_TABLE_ID + '/records';
    var payload = {
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
    };
    
    var submitRes = UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      payload: JSON.stringify(payload)
    });
    
    var result = JSON.parse(submitRes.getContentText());
    
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({
      code: -1,
      msg: err.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// 处理 GET 请求（用于健康检查）
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "ok",
    message: "Lark proxy is running"
  })).setMimeType(ContentService.MimeType.JSON);
}
