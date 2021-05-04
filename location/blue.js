//特殊定位修改 argo.blue.cn

path = $request.path

try {

	if (path && path.search(/longitude/) > 0) {
		
		console.log("特殊定位修改：捕获成功");
		
		if(path.search(/\&longitude=\d+.\d+\&/) > 0){
			path = path.replace(/\&longitude=\d+.\d+\&/, '&longitude=120.69094848632812&')
		}else if(path.search(/\&longitude=\d+.\d+\&/) > 0){
			path = path.replace(/\&longitude=\d+.\d+/, '&longitude=120.69094848632812')
		}else{
			console.log("特殊定位修改：longitude修改失败");
		}
		
		if(path.search(/\&latitude=\d+.\d\&/) > 0){
			path = path.replace(/\&latitude=\d+.\d+\&/, '&latitude=30.526451110839844&')
		}else if(path.search(/\&latitude=.+/) > 0){
			path = path.replace(/\&latitude=\d+.\d+/, '&latitude=30.526451110839844')
		}else{
			console.log("特殊定位修改：latitude修改失败");
		}
		
		console.log("特殊定位修改：成功--" + path)
	}

	
} catch (e) {
  console.log("特殊定位修改：" + e);
} finally {
  $done({path : path})
}