let url = "https://script.google.com/macros/s/AKfycbyGi0iQAtXnhfvY_fH_DZqjZQNXy9JiIVcY-PfkSXx7v4Gzjc0/exec";
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
	requests.onreadystatechange = function(){
		if(this.readyState == 4) output.innerHTML = "Successfuly !";
	}
	requests.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
	requests.send(input.value);
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
	return 0
}
//End.
