let job1 = DisplayJobs();

let informationTechnology = [
    ['Job Title: Front-end Developer', 'Job description: Specializing in website and application design', 'Skills required : HTML/CSS and Javscript', 'Closing date : 10 July 2021', 'Location : 174 Freedom street, Johannesburg, 1912'],
    ['Job Title: Computer Application Technology(CAT) Teacher', 'Job description: Teaching Grade 10 to 12 learners CAT, participating in extra mural activities and accompaning learners to school events',  'Skills required : BEd Teaching specialising in Computer Application Technology', 'Closing date : 16 August 2021', 'Location : Sunward Park High School, Els Park, Boksburg'], 
    ['Job Title: Computer Lab Assistant', 'Job description: ', 'Skills required:', 'Closing date: 1 September 2021', 'Location: 23 College Avenue, Auckland Park, Johannesburg']
];

let teaching = [
    ['Job Title: Computer Application Technology(CAT) Teacher', 'Job description: Teaching Grade 10 to 12 learners CAT, participating in extra mural activities and accompaning learners to school events',  'Skills required : BEd Teaching specialising in Computer Application Technology', 'Closing date : 16 August 2021', 'Location : Sunward Park High School, Els Park, Boksburg'], 
    ['Job Title: Music Teacher', 'Job description: Teaching the recorder to Grade 4 to 6 learners after school', 'Skills required: BA Music Degree specialising in any instrument', 'Closing date: 10 October 2021', 'Location: Balmoral Girls Primary School, Queenstown']
];

let nursing = [['Job Title: Nursing Home Assistant', 'Job description: Assist our residents with self-care activities such as getting dressed, making beds and eating', 'Skills required: Zero to no experience in nursing homes', 'Closing date: 11 August 2021', 'Location: Serenity Home, Southern Wood, East London']];

let accounting = [['Job Title: Bookkeeper', 'Job decription: Preparing financial statements', 'Skills required: Matric certificate with Accounting as one of the subjects', 'Closing date: 30 November 2021', 'Location: Word of Life Bookshop, Grahamstown']];

let engineering = [['Job Title: Junior Electrical Engineer', 'Job description: Designing the solar system of a new apartment development', 'Skills required: BEng/Bsc Electrical and/or Electronic Engineeering', 'Closing date: 30 December 2021', 'Location: 23 Main Road, Woodstock, Cape Town']];

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
        case 'accounting':
            job1.displayCategoryJobs(accounting);
            break; 
        case 'engineering':
            job1.displayCategoryJobs(engineering);
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