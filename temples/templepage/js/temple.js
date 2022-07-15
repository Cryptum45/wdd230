
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
    let services = document.createElement("p");
    let ordinance = document.createElement("p");
    let history = document.createElement("p");
    let session = document.createElement("p");
    let closure = document.createElement("p");
    let contact = document.createElement("h3");

    logo.setAttribute('src', temple.logo);
    logo.setAttribute('alt', `${temple.name}'s logo`);
    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    email.textContent = `${temple.email}`;
    services.textContent = `${temple.services}`;
    ordinance.textContent = `${temple.ordinance}`;
    history.textContent = `${temple.history}`;
    session.textContent = `${temple.session}`;
    closure.textContent = `${temple.closure}`;
    contact.textContent = `${temple.contact}`;



    /****************order of how they will appear******************/
    logo.classList.add("logo");
    name.classList.add("name");
    address.classList.add("address");
    contact.classList.add("contact");
    phone.classList.add("phone");
    email.classList.add("email");
    services.classList.add("services");
    ordinance.classList.add("ordinace");
    history.classList.add("history");
    session.classList.add("session");
    closure.classList.add("closure");
    

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(ordinance);
    card.appendChild(history);
    card.appendChild(session);
    card.appendChild(closure);
    card.appendChild(contact);
    card.appendChild(logo);
    infoCards.appendChild(card);
}