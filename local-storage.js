function storeRegisteredPeople(registeredList) {
    var listRegisteredPeople = JSON.stringify(registeredList);
    localStorage.setItem('listRegisteredPeople', listRegisteredPeople);
}

function getRegisteredList() {
    var storedRegisteredList = localStorage.getItem('listRegisteredPeople');
    return JSON.parse(storedRegisteredList);
}