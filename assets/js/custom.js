var navButton = document.querySelector(".menu");
var navMenu = document.querySelector(".nav_menu");
navMenu.classList.add("accessibly_hidden");
var visible = false;

navButton.addEventListener("click", function(){
	if (visible){
		navMenu.classList.add("accessibly_hidden");
	}else {
		navMenu.classList.remove("accessibly_hidden");
	}
	visible = !visible;
});