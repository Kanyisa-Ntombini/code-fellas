let job1 = DisplayJobs();

let informationTechnology = ['Job Title: Front-end developer Job description: Specializing in website and application design Skills required : HTML/CSS and Javscript Closing date : 10 July 2021 Location : 174 Freedom street, Johannesburg, 1912', 'Job Title: Computer Application Technology(CAT) Teacher Job description: Teaching Grade 10 to 12 learners (CAT), participating in extra mural activities and accompaning learners to school events  Skills required : BEd Teaching specialising in Computer Application Technology Closing date : 16 August 2021 Location : Sunward Park High School, Els Park, Boksburg', 'Job Title: Computer Lab assistant Job decription: Skills required: Closing date: 1 September 2021 Location: 23 College Avenue, Auckland Park, Johannesburg'];
['Job Title: Job decription: Skills required: Closing date: Location:']

let teaching = ['teaching', 'Job Title: Job decription: Skills required: Closing date: Location:'];

let nursing = ['nursing','Job Title: Job decription: Skills required: Closing date: Location:'];

let accounting = ['accounting','Job Title: Job decription: Skills required: Closing date: Location:'];

let engineering = ['engineering','Job Title: Job decription: Skills required: Closing date: Location:'];

//HTML ELEMENTS
const showBtn = document.querySelector('.showBtn');
const chooseCategory = document.getElementById('chooseCategory');
function categories() {
    job1.clearJobs();
    
    switch (chooseCategory.value) {
        case 'info-tech':
            job1.displayCategoryJobs(informationTechnology);
            break;
        case 'teaching':
            job1.displayCategoryJobs(teaching);
            break;
        case 'nursing':
            job1.displayCategoryJobs(nursing);
            break;    
    }
}

showBtn.addEventListener('click', categories);