const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('click', () => {

    if (input.value !== "") {

        
        const bookChap = document.createElement("li");
        const deleteButton = document.createElement("button");

        
        bookChap.textContent = input.value;
        deleteButton.textContent = "❌";

        
       bookChap.appendChild(deleteButton);
        list.appendChild(bookChap);

        
        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', () => {

            list.removeChild(bookChap);

        });
    };
});