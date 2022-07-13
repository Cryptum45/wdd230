
/* ******************************************************************/

const URLrequest = 'https://Cryptum45.github.io/wdd230/temples/templepage/js/data.json';
const infoCards = document.querySelector(".cards");

fetch(URLrequest)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const temples = jsonObject["temples"];
    console.table(jsonObject);
    temples.forEach(displayTemples);
});

function displayTemples(temple) {
    let card = document.createElement("section");
    let logo = document.createElement("img");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let website = document.createElement("p");
    let services = document.createElement("p");
    let ordinance = document.createElement("p");
    let history = document.createElement("p");
    let session = document.createElement("p");
    let closure = document.createElement("p");

    logo.setAttribute('src', temple.logo);
    logo.setAttribute('alt', `${temple.name}'s logo`);
    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    email.textContent = `${temple.email}`;
    website.innerHTML = `<a href="${temple.url}" target="_blank">Websites</a>`;
    services.textContent = `${temple.services}`;
    ordinance.textContent = `${temple.ordinance}`;
    history.textContent = `${temple.history}`;
    session.textContent = `${temple.session}`;
    closure.textContent = `${temple.closure}`;

    logo.classList.add("logo");
    name.classList.add("name");
    address.classList.add("address");
    phone.classList.add("phone");
    email.classList.add("email");
    website.classList.add("website");
    services.classList.add("services");
    ordinance.classList.add("ordinace");
    history.classList.add("history");
    session.classList.add("session");
    closure.classList.add("closure");

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    card.appendChild(services);
    card.appendChild(ordinance);
    card.appendChild(history);
    card.appendChild(session);
    card.appendChild(closure);
    card.appendChild(logo);
    infoCards.appendChild(card);
}