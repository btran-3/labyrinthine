//definition buttons

var
	showBtn1a = document.querySelector("#test-para-2 button:nth-of-type(1)"),
	content1a = document.querySelector("#test-para-2 > div:nth-of-type(1)");

showBtn1a.addEventListener("click", function(){
  if(content1a.className == "hidden"){
	content1a.className = "visible";
} else{
	content1a.className = "hidden";
}
}, false);
