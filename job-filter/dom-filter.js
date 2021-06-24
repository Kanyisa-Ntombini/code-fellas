function createElement(item) {
    const newDiv = document.createElement('div');
    const existingDiv = document.querySelector('.referenceDiv');

    //Storing the parent node in a variable
    let parentDiv = existingDiv.parentNode;
    const enterRegNum = document.createTextNode(item);
    newDiv.appendChild(enterRegNum);
    parentDiv.insertBefore(newDiv, existingDiv);
    newDiv.classList.add('job');
}

let informationTechnology = ['Computer Lab Assistant', 'Computer Application Technology Teacher', 'Junior Web Developer'];

//HTML ELEMENTS
const showBtn = document.querySelector('.showBtn');
const chooseCategory = document.getElementById('chooseCategory');
function categories() {
    switch (chooseCategory.value) {
        case 'info-tech':
            for (let i=0; i<informationTechnology.length; i++) {
                let jobs = informationTechnology[i];
                console.log(jobs);
                createElement(jobs);
            }
            break;
    }
}

showBtn.addEventListener('click', categories);