let url = "https://script.google.com/macros/s/AKfycbyaBnlqEmtPHsJlOztldIgrbhd0VKTq17Ok9Q16ckJbdv8pvhk/exec";
let output = document.getElementById("output");
let input = document.getElementById("input");
let submit = document.getElementById("submit"),
	reload = document.getElementById("reload");

submit.addEventListener("click",function(){
	doPost()
});
reload.addEventListener("click",function(){
	window.location.reload()
})

function doPost(){
	let requests = new XMLHttpRequest();
	requests.open("POST", url, true);
	requests.send("name=Dung");
	return 0;
}

function doGet(){
	let requests = new XMLHttpRequest();
	requests.open("GET",url);
	requests.onreadystatechange = function(){
		if(this.readyState == 4){
			output.innerHTML = this.responseText;
		}
	}
	requests.send()
	return 0;
}