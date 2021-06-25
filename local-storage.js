function storeRegisteredPeople(registeredList) {
    console.log(registeredList);
    var listRegisteredPeople = JSON.stringify(registeredList);
    localStorage.setItem('listRegisteredPeople', listRegisteredPeople);
}

function getRegisteredList() {
    var storedRegisteredList = localStorage.getItem('listRegisteredPeople');
    console.log(storedRegisteredList);
    return JSON.parse(storedRegisteredList);
}

function clearStorarage(){
    localStorage.clear();
}