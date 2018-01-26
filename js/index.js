var menu = document.getElementById('menu'),
	sideMenu = document.getElementById('side-nav'),
		navMenuIn = document.querySelector('body');

menu.onclick = function(){

	if(navMenuIn.classList.contains('clicked')){
	navMenuIn.classList.remove("clicked");
	
	} else{
  navMenuIn.classList.add("clicked");

  }
}

sideMenu.onclick = function(){

	if(navMenuIn.classList.contains('side-clicked')){
	navMenuIn.classList.remove("side-clicked");
	sideMenu.innerHTML = "<p>CONTACT</p>" 
	} else{
  navMenuIn.classList.add("side-clicked");
  sideMenu.innerHTML = "<p>CLOSE</p>"
  }
}
