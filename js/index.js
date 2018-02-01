var sideMenu = document.getElementById('contact'),
navMenuIn = document.querySelector('body');

sideMenu.onclick = function(){

	if(navMenuIn.classList.contains('side-clicked')){
		navMenuIn.classList.remove("side-clicked");
		sideMenu.innerHTML = "<p>CONTACT</p>"; 
	} else{
		navMenuIn.classList.add("side-clicked");
		sideMenu.innerHTML = "X";
	}
}


