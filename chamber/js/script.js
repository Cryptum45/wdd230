let d = new Date();

document.getElementById("currentYear").textContent = d.getFullYear();

let lastUpdated = document.lastModified;

document.getElementById("updatedDate").textContent = lastUpdated;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navmenu')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};