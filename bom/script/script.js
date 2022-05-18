const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const bookChap = input.value;
  input.value = '';

  const bookChap2 = document.createElement('li');
  const textList = document.createElement('span');
  const deleteButton = document.createElement('button');

  list.appendChild(bookChap2);
  bookChap2.appendChild(textList)
  textList.textContent = bookChap;
  
  
  bookChap2.appendChild(deleteButton);
  deleteButton.textContent = '❌';

  deleteButton.addEventListener('click', () => {
    list.removeChild(bookChap2);
  });

  input.focus();
});