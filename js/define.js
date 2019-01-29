//definition buttons

var
	showBtn2 = document.querySelector("#test-para button:nth-of-type(1)"),
	content2 = document.querySelector("#test-para > div");

showBtn2.addEventListener("click", function(){
  if(content2.className == "hidden"){
	content2.className = "visible";
} else{
	content2.className = "hidden";
}
}, false);
