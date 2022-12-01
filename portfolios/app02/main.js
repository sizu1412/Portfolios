console.log("main.js!!");

const URL = "https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json";


$(document).ready(()=>{
	console.log("Ready!!");

	// Axios
	const option = {responseType: "blob"};
	axios.get(URL, option).then(res=>{
		// 通信が成功した場合
		res.data.text().then(str=>{
			let arr = JSON.parse(str);
			console.log(arr);
			//岐阜県美濃地方のお天気コードを昼、夜の２つを表示せよ
			console.log(arr[0]["timeSeries"][0]["areas"][0]['area']['name'])
			console.log(arr[0]["timeSeries"][0]["areas"][0]["weathers"][0])
			console.log(arr[0]["reportDatetime"])
			console.log(arr[0]["timeSeries"][0]["areas"][0]['weathrCodes'])
//お天気コードを取って、HTML上に対応マークの文字を表示せよ			
			$('p1').text(arr[0]["timeSeries"][0]["areas"][0]['area']['name']+"の天気")
			$('p2').text(arr[0]["timeSeries"][0]["areas"][0]["weathers"][0])
			weatherCodes = (arr[0]["timeSeries"][0]["areas"][0]["weatherCodes"][0]);
//それを画像ファイルでも表示せよ！			
			$('#basyo1').after((`<img src="./svg/`)+weatherCodes + (`.svg">`));
			
//飛騨
$('h1').text(arr[0]["timeSeries"][0]["areas"][1]['area']['name']+"の天気")
$('h2').text(arr[0]["timeSeries"][0]["areas"][1]["weathers"][1])
weatherCodes = (arr[0]["timeSeries"][0]["areas"][1]["weatherCodes"][1]);
//それを画像ファイルでも表示せよ！			
$('#basyo2').after((`<img src="./svg/`)+weatherCodes + (`.svg">`));


//cssを使って綺麗にせよ
		});
	}).catch(err=>{
		// 通信が失敗した場合
		console.log(err);
	});
});