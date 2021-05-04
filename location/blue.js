//特殊定位修改 argo.blue.cn

path = $request.path

try {
	if (path && path.search(/longitude/) > 0) {
		
		console.log("特殊定位修改：捕获成功");
		
		if(path.search(/\&longitude=.+\&/) > 0){
			path = path.replace(/\&longitude=.+\&/, '&longitude=120.69094848632812&')
		}else if(path.search(/\&longitude=.+/) > 0){
			path = path.replace(/\&longitude=.+/, '&longitude=120.69094848632812')
		}else{
			console.warn("特殊定位修改：longitude修改失败");
		}
		
		if(path.search(/\&latitude=.+\&/) > 0){
			path = path.replace(/\&latitude=.+\&/, '&latitude=30.526451110839844&')
		}else if(path.search(/\&latitude=.+/) > 0){
			path = path.replace(/\&latitude=.+/, '&latitude=30.526451110839844')
		}else{
			console.warn("特殊定位修改：latitude修改失败");
		}
		
		console.log("特殊定位修改：成功--" + path)
	}
	
} catch (e) {
  console.warn("特殊定位修改：" + e);
} finally {
 $done({path : path})
}