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

/*************************************************** */
// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

