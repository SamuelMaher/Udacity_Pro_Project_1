/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

let sectionsCount = document.querySelectorAll('section');
let NavigationMenu = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

//Adding smooth-scrolling behavior

document.querySelector('html').style.cssText ='scroll-behavior:smooth';


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for ( let i = 0 ; i< sectionsCount.length; i++) {

let sectionId = document.getElementsByTagName('section')[i].getAttribute('id');
let addList = document.createElement('li');
let linkSecion = document.createElement('a');
linkSecion.textContent = sectionId;
linkSecion.setAttribute("href","#"+sectionId);
linkSecion.classList.add('menu__link');
NavigationMenu.appendChild(addList);
addList.appendChild(linkSecion);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
for ( let i = 0 ; i< sectionsCount.length; i++) {

  sectionsCount[i].addEventListener('wheel',function(){

  let selectSectionId = document.getElementsByTagName('section')[i].getAttribute('id');
  if (!(document.getElementById(selectSectionId).classList.contains('your-active-class')))
{
  document.getElementById(selectSectionId).classList.add('your-active-class');
}


for ( let j = 0 ; j< sectionsCount.length; j++) {

let notActiveSectionsId = document.getElementsByTagName('section')[j].getAttribute('id');

  if (!(notActiveSectionsId == selectSectionId)){

    if ((document.getElementById(notActiveSectionsId).classList.contains('your-active-class')))
    {
    document.getElementById(notActiveSectionsId).classList.remove('your-active-class');
    }

  }

}

});

}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
//go to top when referesh the page
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
