let job1 = DisplayJobs();

let informationTechnology = [
    ['Job Title: Front-end Developer', 'Job description: Specializing in website and application design', 'Skills required : HTML/CSS and Javscript', 'Closing date : 10 July 2021', 'Location : 174 Freedom street, Johannesburg, 1912'],
    ['Job Title: Computer Application Technology(CAT) Teacher', 'Job description: Teaching Grade 10 to 12 learners CAT, participating in extra mural activities and accompaning learners to school events',  'Skills required : BEd Teaching specialising in Computer Application Technology', 'Closing date : 16 August 2021', 'Location : Sunward Park High School, Els Park, Boksburg'], 
    ['Job Title: Computer Lab Assistant', 'Job description: ', 'Skills required:', 'Closing date: 1 September 2021', 'Location: 23 College Avenue, Auckland Park, Johannesburg'],
    ['Job Title:', 'Job description:', 'Skills required:', 'Closing date:', 'Location:']
];

let teaching = ['teaching', 'Job Title: Job decription: Skills required: Closing date: Location:'];

let nursing = ['nursing','Job Title: Job decription: Skills required: Closing date: Location:'];

let accounting = ['accounting','Job Title: Job decription: Skills required: Closing date: Location:'];

let engineering = ['engineering','Job Title: Job decription: Skills required: Closing date: Location:'];

//Categories
const showBtn = document.querySelector('.showBtn');
const chooseCategory = document.getElementById('chooseCategory');
function categories() {
    job1.clearElements();
    
    switch (chooseCategory.value) {
        case 'info-tech':
            /*let jobAvailable = job1.loopThroughJobs(informationTechnology);*/
            job1.displayCategoryJobs(informationTechnology);
            break;
        case 'teaching':
            job1.displayCategoryJobs(teaching);
            break;
        case 'nursing':
            job1.displayCategoryJobs(nursing);
            break;    
    }

    //creating the submit button
    let newButton = document.createElement('button');
    const existingDiv = document.querySelector('.referenceDiv');
            
    //Storing the parent node in a variable
    let parentDiv = existingDiv.parentNode;
    const enterLabel = document.createTextNode('Click here to apply');
    newButton.setAttribute('class','changeColor');
    newButton.setAttribute('id', 'goToApplication')
    newButton.appendChild(enterLabel);
    parentDiv.insertBefore(newButton, existingDiv);

    let goToApplication = document.getElementById('goToApplication');
    function applicationButton () {
        console.log(goToApplication);
        window.open('https://www.ey.com/en_za/careers');
        window.location.href = '../successfulApplication.html';
    }
    goToApplication.addEventListener('click', applicationButton);
}
showBtn.addEventListener('click', categories);