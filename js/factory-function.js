function StoreNames () {
    let storeAllUsers = [];

    function createObject(firstName, y) {
        let userObject = {
            name: firstName,
            surname: y
        }
    }

    function createList () {
        storeAllUsers.push(userObject);
    }

    return {
        createObject,
        createList
    }
}