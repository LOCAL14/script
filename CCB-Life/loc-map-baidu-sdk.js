// QX
// [Rewrite_local]
// ^https:\/\/loc\.map\.baidu\.com\/sdk\.php url script-response-body https://gitee.com/local14/script/raw/master/CCB-Life/loc-map-baidu-sdk.js
// [MitM]
// host = loc.map.baidu.com

try {
  var obj = JSON.parse($response.body);
  
  obj = {"content":{"addr":{"adcode":"330102","city":"杭州市","city_code":"179","country":"中国","country_code":"0","district":"上城区","province":"浙江省","street":"七甲路","street_number":"30号后门","town":"四季青街道"},"bldg":"","floor":"","navi":",,,","point":{"x":"120.201169","y":"30.250495"},"radius":"5.000000","sema":{"aptag":"在常青苑社区附近","aptagd":{"pois":[{"addr":"浙江省杭州市江干区采荷街道","pid":"16069702850154799250","pname":"常青苑社区","pr":0.99000000,"tags":"房地产;住宅区"},{"addr":"杭州市江干区解放东路123号","pid":"1192584820151540963","pname":"常青公寓","pr":0.99000000,"tags":"房地产;住宅区"},{"addr":"杭州市江干区解放东路18号市民中心A座","pid":"17992207053413679103","pname":"杭州市人民政府","pr":0.99000000,"tags":"政府机构;各级政府"},{"addr":"解放东路18号","pid":"14100872805888671981","pname":"杭州市民中心","pr":0.99000000,"tags":"政府机构;其他"},{"addr":"浙江省杭州市江干区钱江路市民中心D座11-13层","pid":"12428176026543301721","pname":"杭州市质量技术监督局","pr":0.99000000,"tags":"政府机构;行政单位"}]}}},"result":{"error":"161","time":"2021-05-04 00:47:35"}}
  
  console.log("建行生活-修改定位sdk：修改成功");
} catch (e) {
  console.warn("建行生活-修改定位sdk：" + e);
} finally {
  $done({ body: JSON.stringify(obj) });
}