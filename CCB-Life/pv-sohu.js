// QX
// [Rewrite_local]
// ^http:\/\/pv\.sohu\.com\/cityjson\?ie\=utf-8 url script-response-body https://gitee.com/local14/script/raw/master/CCB-Life/pv-sohu.js
// [MitM]
// host = pv.sohu.com

try {
	$response.body ="var returnCitySN = {\"cip\": \"115.239.211.92\", \"cid\": \"330100\", \"cname\": \"杭州市\"};"
	
  console.log("建行生活-修改定位sohu：修改成功");
} catch (e) {
  console.warn("建行生活-修改定位sohu：" + e);
} finally {
  $done({ body: JSON.stringify(obj) });
}