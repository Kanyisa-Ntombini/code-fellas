//Reference HTML elements
const submitButton = document.querySelector('.submitButton');
let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let dateOfBirth = document.querySelector('.dateOfBirth');
let cellNumber = document.querySelector('.cellNumber');
let emailAddress = document.querySelector('.emailAddress');
let physicalAddress = document.querySelector('.physicalAddress');
let employedRadio = document.querySelector('.employedRadio');
let postalAddress = document.querySelector(".postalAddress");
let unemploymentTime = document.querySelector('.unemploymentTime');
let cvUpload = document.querySelector('.cvUpload');
let mytable = document.getElementById('myTable')
var createTable = document.createElement('table')

//Getting stored registered people
var storingRegisteredPeople = getRegisteredList();

const firstUser = StoreNames(storingRegisteredPeople);

function clickedSubmitBtn () {
    let checkedRadioBtn = document.querySelector("input[name='radioBbtn']:checked");


    firstUser.createObject(firstName.value, lastName.value, dateOfBirth.value, cellNumber.value, emailAddress.value, physicalAddress.value, postalAddress.value, checkedRadioBtn.value, unemploymentTime.value, cvUpload);
    firstUser.createList();
    let printList = firstUser.getStoredList();
    console.log(printList);

    //Storing registered people list
    storeRegisteredPeople(firstUser.getStoredList());

}
const storedUsers =  firstUser.getStoredList();
const storedList = storedUsers.filter(function(storage){
   console.log(storage) 
    return storage.EmployedRadio =="no" 
})
console.log(storedList)

submitButton.addEventListener('click', clickedSubmitBtn);