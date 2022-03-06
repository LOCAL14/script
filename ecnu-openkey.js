// QX
// [Rewrite_local]
// ^https:\/\/anti-epidemic\.ecnu\.edu\.cn\/clock\/mini\/wx\/new url script-response-body https://raw.githubusercontent.com/LOCAL14/script/main/ecnu-openkey.js
// [MitM]
// host = anti-epidemic.ecnu.edu.cn

try {
  console.log("ECNU签到：Start");
  var obj = JSON.parse($request.scheme);

  console.log(obj);
} catch (e) {
  console.warn("ECNU签到：" + e);
} finally {
  $done();
}