function DisplayJobs() {
    function createElement(item) {
        const newDiv = document.createElement('div');
        let wrapped = document.createElement('a');
        const existingDiv = document.querySelector('.referenceDiv');
            
        //Storing the parent node in a variable
        let parentDiv = existingDiv.parentNode;
        const enterRegNum = document.createTextNode(item);
        wrapped.appendChild(enterRegNum);
        newDiv.appendChild(wrapped);
        parentDiv.insertBefore(newDiv, existingDiv);
        newDiv.classList.add('job');
    }

    function displayCategoryJobs(jobList) {
        for (let i=0; i<jobList.length; i++) {
            let jobs = jobList[i];
            console.log(jobs);
            createElement(jobs);
        }
    }

    function clearJobs() {
    let node = document.querySelectorAll('.job');
        for (let j=0; j<node.length; j++) {
            if (node[j].parentNode) {
                node[j].parentNode.removeChild(node[j]);
            }; 
        }
    }

    return {
        createElement,
        displayCategoryJobs,
        clearJobs
    }
}