const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const display = document.querySelector(".cards");

gridBtn.addEventListener("click", () => {
	// example using arrow function
	display.classList.remove("cards-list");
});

listBtn.addEventListener("click", () => {
	display.classList.add("cards-list");
})

/* ===========================================================================================*/

const URLrequest = 'https://Cryptum45.github.io/wdd230/lesson9-2/js/data.json';
const infoCards = document.querySelector(".cards");

fetch(URLrequest)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const companies = jsonObject["companies"];
    console.table(jsonObject);
    companies.forEach(displayCompanies);
});

function displayCompanies(company) {
    let card = document.createElement("section");
    let logo = document.createElement("img");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let website = document.createElement("p");
    let membership = document.createElement("p");

    logo.setAttribute('src', company.logo);
    logo.setAttribute('alt', `${company.name}'s logo`);
    name.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    email.textContent = `${company.email}`;
    website.innerHTML = `<a href="${company.url}" target="_blank">Commerce Website</a>`;
    membership.textContent = `${company.membership}`;

    logo.classList.add("logo");
    name.classList.add("name");
    address.classList.add("address");
    phone.classList.add("phone");
    email.classList.add("email");
    website.classList.add("website");
    membership.classList.add("membership");

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    card.appendChild(membership);
    card.appendChild(logo);
    infoCards.appendChild(card);
}