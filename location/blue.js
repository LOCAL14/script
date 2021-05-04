//特殊定位修改 argo.blue.cn

url = $request.url

try {
	if (url && url.search(/longitude/) > 0) {
		
		console.log("特殊定位修改：捕获成功");
		
		if(url.search(/\&longitude=.+\&/) > 0){
			url.replace(/\&longitude=.+\&/, '&longitude=120.69094848632812&')
		}else if(url.search(/\&longitude=.+/) > 0){
			url.replace(/\&longitude=.+/, '&longitude=120.69094848632812')
		}else{
			console.warn("特殊定位修改：longitude修改失败");
		}
		
		if(url.search(/\&latitude=.+\&/) > 0){
			url.replace(/\&latitude=.+\&/, '&latitude=30.526451110839844&')
		}else if(url.search(/\&latitude=.+/) > 0){
			url.replace(/\&latitude=.+/, '&latitude=30.526451110839844')
		}else{
			console.warn("特殊定位修改：latitude修改失败");
		}
		
		console.log("特殊定位修改：成功--" + url)
	}
	
} catch (e) {
  console.warn("特殊定位修改：" + e);
} finally {
 $done({path : url})
}