export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type,Authorization"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const LARK_APP_ID = "cli_a93bc13364f88060";
    const LARK_APP_SECRET = "om7RQokYqVlyQJOlIfdatcuFVQw85OIj";
    const LARK_APP_TOKEN = "Oy1dbiDS7aLIS8sqI1ZumqJSt8b";
    const LARK_TABLE_ID = "tblKpStf6IgveRvP";

    try {
      if (request.url.includes("/submit-score") && request.method === "POST") {
         const scoreData = await request.json();

         // 1. 获取 Token
         const tokenRes = await fetch('https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
                 app_id: LARK_APP_ID,
                 app_secret: LARK_APP_SECRET
             })
         });
         const tokenData = await tokenRes.json();
         const token = tokenData.tenant_access_token;

         // 2. 提交成绩
         const url = `https://open.larksuite.com/open-apis/bitable/v1/apps/${LARK_APP_TOKEN}/tables/${LARK_TABLE_ID}/records`;
         const payload = {
             fields: {
                 "时间": scoreData.time,
                 "姓名": scoreData.studentName,
                 "课程": scoreData.course,
                 "用时": scoreData.duration,
                 "总分": Number(scoreData.total), // 强制转换为数字
                 "正确率": scoreData.accuracy,
                 "听力": Number(scoreData.listening), // 强制转换为数字
                 "阅读": Number(scoreData.reading), // 强制转换为数字
                 "写作": Number(scoreData.writing), // 强制转换为数字
                 "口语": Number(scoreData.speaking) // 强制转换为数字
             }
         };

         const submitRes = await fetch(url, {
             method: 'POST',
             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(payload)
         });

         const submitData = await submitRes.json();
         return new Response(JSON.stringify(submitData), {
             headers: { ...corsHeaders, "Content-Type": "application/json" }
         });

      } else {
         // Proxy functionality
         const url = new URL(request.url);
         const targetUrl = new URL(url.pathname + url.search, "https://open.larksuite.com");

         const newReq = new Request(targetUrl, {
            method: request.method,
            headers: request.headers,
            body: request.body
         });
         
         const response = await fetch(newReq);
         const newRes = new Response(response.body, response);
         Object.keys(corsHeaders).forEach(k => newRes.headers.set(k, corsHeaders[k]));
         return newRes;
      }

    } catch (e) {
       return new Response(JSON.stringify({ code: -1, msg: e.message }), {
           status: 500,
           headers: { ...corsHeaders, "Content-Type": "application/json" }
       });
    }
  }
};
