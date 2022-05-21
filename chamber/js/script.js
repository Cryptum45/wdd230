let d = new Date()

/* sets current date in header */
let date = new Date().toDateString();
document.getElementById("currentDate").innerHTML = date;
/**********************************************/

/** sets the time modified in the footer **/
document.getElementById("currentYear").textContent = d.getFullYear();
let lastUpdated = document.lastModified;
document.getElementById("updatedDate").textContent = lastUpdated;
/**********************************************/




/**makes the nav turn in to a drop down menu in small screen */
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navmenu')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
/**********************************************************************************************/

/**meet and join banner */
const meeting = document.getElementById("meeting")
if (d === 1 || d === 2) {
    meeting.style.display = "block";
}

const button2 = document.querySelector("#button2");
button2.addEventListener("#click", () => {
    meeting.style.display = "none";
});