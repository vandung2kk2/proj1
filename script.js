let url = "https://script.google.com/macros/s/AKfycbyM5GedbvM6ygiGEpJ94E1Ahve_05F63-GN5Y6GUBtD_muSiKE/exec";
let output = document.getElementById("output");
let input = document.getElementById("input");
let submit = document.getElementById("submit"),
	reload = document.getElementById("reload");

submit.addEventListener("click",function(){
	doGet()
});
reload.addEventListener("click",function(){
	window.location.reload()
})

function doPost(){
	let requests = new XMLHttpRequest();
	requests.open("POST",url,true);
	requests.send("?name="+input.value)
	return 0;
}

function doGet(){
	let requests = new XMLHttpRequest();
	requests.open("GET",url+"?name="+input.value);
	/*requests.onreadystatechange = function(){
		if(this.readyState == 4){
			output.innerHTML = this.responseText;
		}
	}*/
	requests.send()
	return 0;
}