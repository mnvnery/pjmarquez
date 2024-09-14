
// Look for .hamburger
/*
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    $("#mySidebar").toggle();
    // Do something else, like open/close menu
});
*/

var button = document.querySelector('.menu__mobile_button');

console.log(button)


button.addEventListener('click', () => {
    console.log('clicked')
	button.classList.toggle('active');
    $("#mySidebar").toggle();
})
