let url = "https://script.google.com/macros/s/AKfycbxVgGbsxLRCJ5NUpd8EKg2E3NuuFpDQO8XVEKbuRYdHDmLb8VvZBPqg/exec";
let output = document.getElementById("output");
let input = document.getElementById("input");
let submit = document.getElementById("submit"),
	reload = document.getElementById("reload");
console.log("OK");
submit.addEventListener("click",function(){
	doGet();
});

function doGet(){
	var res = new XMLHttpRequest();
	res.open("GET", url + "&name=" + input.value);
	res.onreadystatechange = function(){
		if(this.readyState == 4){
			console.log(this.responseText)
		}
	}
	res.send()
}
