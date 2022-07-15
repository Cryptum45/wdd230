




/**makes the nav turn in to a drop down menu in small screen */
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navmenu')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
/**********************************************************************************************/