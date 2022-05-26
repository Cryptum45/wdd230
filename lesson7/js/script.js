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

/****Time tell last visit*******/
function firstVisit() {
    var saveLastVist = new Date();
    localStorage.setItem = saveLastVist;
    return saveLastVist;
}
howLongBetweenVisits(firstVisit());


function howLongBetweenVisits(saveLastVist) {
    const date1 = firstVisit();
    const date2 = new Date();

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // time difference between two dates
    const timeBetween = date2.getTime() - date1.getTime();

    // # of days between visits
    const totalDifference = Math.round(timeBetween / oneDay);

    return totalDifference;
    
}

document.querySelector('.lastvisit').innerHTML = howLongBetweenVisits(firstVisit())
