console.log("main.js!!");

// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	// Axiosを使ってみる!!
	const option = {responseType: "blob"};
	axios.get("https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json", option).then(res=>{
		// 通信が成功した場合
		console.log("通信成功!!");
		console.log(res);// データそのもの
		res.data.text().then(str=>{
			let arr = JSON.parse(str);// JSONオブジェクトに変換
			console.log(arr);// データ確認
			console.log(arr[0]["publishingOffice"]);
			console.log(arr[0]["reportDatetime"]);
			console.log(arr[0]["timeSeries"][0]);
			//東京地方
			console.log(arr[0]["timeSeries"][0]["areas"][0]["area"]["name"]);
			console.log(arr[0]["timeSeries"][0]["waves"]);
			console.log(arr[0]["timeSeries"]);
			console.log(arr[0]["timeSeries"]);
			//伊豆諸島北部
			console.log(arr[0]["timeSeries"][0]["areas"][1]["area"]["name"]);

		});
	}).catch(err=>{
		// 通信が失敗した場合
		console.log("通信失敗...");
		console.log(err);// エラー内容
	});
});