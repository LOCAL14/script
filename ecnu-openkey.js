// QX
// [Rewrite_local]
// ^https:\/\/anti-epidemic\.ecnu\.edu\.cn\/clock\/mini\/wx\/new url script-response-body https://raw.githubusercontent.com/LOCAL14/script/main/ecnu-openkey.js
// [MitM]
// host = anti-epidemic.ecnu.edu.cn

try {
  console.log("ECNU签到：Start");
  let regax = new RegExp("(?:open_key\=)(.*)")
  let path = $request.path
  let secret =  {
    "dbId": "51215902107",
    "dbPassword": "Xz15590871361",
    "openKey": path.match(regax)[1],
    "unionId": "ohQfcwRbBGT7wSDuY6VpFdiaav6A",
    "mail_host": "smtp.qq.com",
    "mail_sender": "zachary.xia@qq.com",
    "mail_license": "alyjecwokllubgeb",
    "mail_receiver": "zhen.xia@stu.ecnu.edu.cn"
  }
  
  console.log(JSON.stringify(secret));

  import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
  import { Base64 } from 'https://cdn.jsdelivr.net/npm/js-base64@3.7.2/base64.mjs';

  const githubToken = "Z2hwX3B2NXNnWHBXTXh0MUlzRnFBVzRkUDlrQ3lmMUhwRTEwMm1Iag=="
  const octokit = new Octokit({ auth: Base64.decode(githubToken)});

  let response =  octokit.request('GET /repos/{owner}/{repo}/actions/secrets/public-key', {
    owner: 'LOCAL15',
    repo: 'daily_health_sign_in'
  })

  console.log(response.body.key)




  $notify("ECNU签到", "Open Key捕获成功", "")
} catch (e) {
  console.log("[Error] ECNU签到：" + e);
  $notify("ECNU签到", "Open Key捕获出错", "")
} finally {
  $done();
}