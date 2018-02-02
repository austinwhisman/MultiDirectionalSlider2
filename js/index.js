var sideMenu = document.getElementById('contact'),
	about = document.getElementById('about')
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

about.onclick = function() {

	if(navMenuIn.classList.contains('about-clicked')){
		navMenuIn.classList.remove("about-clicked");
	} else{
		navMenuIn.classList.add("about-clicked");
		
	}
}
