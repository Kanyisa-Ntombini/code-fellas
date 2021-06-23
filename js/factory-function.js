function StoreNames () {
    let storeAllUsers = [];
    let userObject;

    function createObject(firstName, lastName, dateOfBirth, cellNumber, employedChoose) {
        userObject = {
            name: firstName,
            surname: lastName,
            DateOfBirth: dateOfBirth,
            CellNumber: cellNumber
        }
    }

    function createList () {
        storeAllUsers.push(userObject);
    }

    function getStoredList() {
        return storeAllUsers;
    }

    return {
        createObject,
        createList,
        getStoredList
    }
}