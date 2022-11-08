console.log("main.js!!");

// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	// Axiosを使ってみる！！
	const option = {responseType: "blob"};
axios.get("./data.json", option).then(res=>{
	// 通信が成功した場合
console.log("通信が成功");
console.log(res);//データそのもの
res.data.text().then(str=>{
	let arr = JSON.parse(str);//　JSONオブジェクト
	console.log(arr);//
});
}).catch(err=>{
	// 通信が失敗した場合
console.log("通信が失敗");
console.log(err);//エラー内容
});
});