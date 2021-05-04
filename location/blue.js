//特殊定位修改 argo.blue.cn

try {
	const regex = ;
	if (url && url.search(/longitude/) > 0) {
		
		console.log("特殊定位修改：捕获成功");
		
		if(url.search(/\&longitude=.+\&/) > 0){
			url.replace(/\&longitude=.+\&/, '&longitude=120.69094848632812&')
		}else{
			url.replace(/\&longitude=.+/, '&longitude=120.69094848632812')
		}
		
		if(url.search(/\&latitude=.+\&/) > 0){
			url.replace(/\&latitude=.+\&/, '&latitude=30.526451110839844&')
		}else{
			url.replace(/\&latitude=.+/, '&latitude=30.526451110839844')
		}
	}
} catch (e) {
  console.warn("特殊定位修改：" + e);
} finally {
 $done({path : url})
}