//特殊定位修改 argo.blue.cn

const desLot = '120.69094848632812'
const desLat = '30.526451110839844'

path = $request.path

try {

	if (path && path.search(/longitude/) > 0) {
		
		console.log("特殊定位修改：捕获成功--"+$request.url);
		
		if(path.search(/\&longitude=\d+.\d+\&/) > 0){
			path = path.replace(/\&longitude=\d+.\d+\&/, '&longitude=' + desLot + '&')
		}else if(path.search(/\&longitude=\d+.\d+/) > 0){
			path = path.replace(/\&longitude=\d+.\d+/, '&longitude=' + desLot)
		}else{
			console.log("特殊定位修改：longitude修改失败");
		}
		
		if(path.search(/\&latitude=\d+.\d+\&/) > 0){
			path = path.replace(/\&latitude=\d+.\d+\&/, '&latitude=' + desLat + '&')
		}else if(path.search(/\&latitude=\d+.\d+/) > 0){
			path = path.replace(/\&latitude=\d+.\d+/, '&latitude=' + desLat)
		}else{
			console.log("特殊定位修改：latitude修改失败");
		}
		
		console.log("特殊定位修改：成功--" + path)
		
	}else if(path && path.search(/lat/) > 0 && path.search(/lot/) > 0){
	
		console.log("特殊定位修改：捕获成功--city_code");
		
		if(path.search(/\&lot=\d+.\d+\&/) > 0){
			path = path.replace(/\&lot=\d+.\d+\&/, '&lot=' + desLot + '&')
		}else if(path.search(/\&lot=\d+.\d+/) > 0){
			path = path.replace(/\&lot=\d+.\d+/, '&lot=' + desLot)
		}else{
			console.log("特殊定位修改：lot修改失败");
		}
		
		if(path.search(/\&lat=\d+.\d+\&/) > 0){
			path = path.replace(/\&lat=\d+.\d+\&/, '&lat=' + desLat + '&')
		}else if(path.search(/\&lat=\d+.\d+/) > 0){
			path = path.replace(/\&lat=\d+.\d+/, '&lat=' + desLat)
		}else if(path.search(/lat=\d+.\d+/) > 0){
			path = path.replace(/lat=\d+.\d+/, 'lat=' + desLat)
		}else{
			console.log("特殊定位修改：lat修改失败");
		}
		
		console.log("特殊定位修改：成功--" + path)
	}

	
} catch (e) {
  console.log("特殊定位修改：" + e);
} finally {
  $done({path : path})
}