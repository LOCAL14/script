// QX
// [Rewrite_local]
// ^https:\/\/anti-epidemic\.ecnu\.edu\.cn\/clock\/mini\/wx\/new url script-response-body https://raw.githubusercontent.com/LOCAL14/script/main/ecnu-openkey.js
// [MitM]
// host = anti-epidemic.ecnu.edu.cn

try {
  console.log("ECNU签到：Start");
  let regax = new RegExp("(?:open_key\=)(.*)")
  let path = $request.path
  console.log(JSON.stringify(path.match(regax)[1]));

} catch (e) {
  console.log("[Error] ECNU签到：" + e);
} finally {
  $done();
}