/*var menu = document.getElementById('menu'),*/
	var sideMenu = document.getElementById('contact'),
		navMenuIn = document.querySelector('body');
/*
menu.onclick = function(){

	if(navMenuIn.classList.contains('clicked')){
	navMenuIn.classList.remove("clicked");
	
	} else{
  navMenuIn.classList.add("clicked");

  }
}
*/
sideMenu.onclick = function(){
 var w;
if(window.attachEvent) {
    window.attachEvent('onresize', function() {
        w = window.innerWidth;
    });
}
else if(window.addEventListener) {
    window.addEventListener('resize', function() {
        w = window.innerWidth;
    }, true);
}
	if(navMenuIn.classList.contains('side-clicked')){
	navMenuIn.classList.remove("side-clicked");
	sideMenu.innerHTML = "<p>CONTACT</p>" 
	} else{
  navMenuIn.classList.add("side-clicked");

  if (w > 680) {
  sideMenu.innerHTML = "CLOSE"
	} else {
	sideMenu.innerHTML = "X"
	}
  }
}


