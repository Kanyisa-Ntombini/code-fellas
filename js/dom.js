//Reference HTML elements
const submitButton = document.querySelector('.submitButton');
let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let dateOfBirth = document.querySelector('.dateOfBirth');
let cellNumber = document.querySelector('.cellNumber');
let emailAddress = document.querySelector('.emailAddress');
let physicalAddress = document.querySelector('.physicalAddress');
let employedRadio = document.querySelector('.employedRadio:checked');
let unemploymentTime = document.querySelector('.unemploymentTime');
let cvUpload = document.querySelector('.cvUpload');

const firstUser = StoreNames();

function clickedSubmitBtn () {
    firstUser.createObject(firstName.value, lastName.value, dateOfBirth.value, cellNumber.value);
    firstUser.createList();
    let printList = firstUser.getStoredList();
    console.log(printList);
}
submitButton.addEventListener('click', clickedSubmitBtn);