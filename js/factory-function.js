function StoreNames(storingFileds = []) {
    let storeAllUsers = storingFileds !== null ? storingFileds : [];
    let userObject;

    function createObject(firstName, lastName, dateOfBirth, cellNumber, physicalAddress, emailAddress, postalAddress, employedRadio, unemploymentTime) {
        userObject = {
            name: firstName,
            surname: lastName,
            DateOfBirth: dateOfBirth,
            CellNumber: cellNumber,
            EmailAdress: emailAddress,
            PhysicalAddress: physicalAddress,
            PostalAddress: postalAddress,
            EmployedRadio: employedRadio,
            UnemploymentTime: unemploymentTime
            // CvAttachement: cvUpload
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