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
    let fname = firstName.value;
    firstUser.createObject(fName);
    
}
submitButton.addEventListener('click', clickedSubmitBtn);