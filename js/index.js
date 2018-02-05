var sideMenu = document.getElementById('contact'),
	about = document.getElementById('about')
navMenuIn = document.querySelector('body');

sideMenu.onclick = function(){
	setTimeout(function(){
	var myDiv = document.getElementById('two');
	myDiv.scrollTop = 0;
	myDiv = document.getElementById('welcome');
	myDiv.scrollTop = 0;

	if(navMenuIn.classList.contains('side-clicked')){
		navMenuIn.classList.remove("side-clicked");
	} else{
		navMenuIn.classList.remove("about-clicked");
		navMenuIn.classList.add("side-clicked");
	}
}
, 75)}
about.onclick = function() {
setTimeout(function(){
	var myDiv = document.getElementById('two');
	myDiv.scrollTop = 0;
	myDiv = document.getElementById('welcome');
	myDiv.scrollTop = 0;
	if(navMenuIn.classList.contains('about-clicked')){
		navMenuIn.classList.remove("about-clicked");
	} else{
		navMenuIn.classList.remove("side-clicked");
		navMenuIn.classList.add("about-clicked");

		
	}
}, 75)}
