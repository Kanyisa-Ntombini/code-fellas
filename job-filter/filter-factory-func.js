function DisplayJobs() {
    function createElement(jobAvailable) {
        const newButton = document.createElement('button');
        let wrapped1 = document.createElement('div');
        let wrapped2 = document.createElement('div');
        let wrapped3 = document.createElement('div');
        let wrapped4 = document.createElement('div');
        let wrapped5 = document.createElement('div');
        const existingDiv = document.querySelector('.referenceDiv');

        //Storing the parent node in a variable
        let parentDiv = existingDiv.parentNode;
        const enterInfo1 = document.createTextNode(jobAvailable[0]);
        const enterInfo2 = document.createTextNode(jobAvailable[1]);
        const enterInfo3 = document.createTextNode(jobAvailable[2]);
        const enterInfo4 = document.createTextNode(jobAvailable[3]);
        const enterInfo5 = document.createTextNode(jobAvailable[4]);
        wrapped1.appendChild(enterInfo1);
        wrapped1.setAttribute('class', 'jobTitle');
        wrapped2.appendChild(enterInfo2);
        wrapped2.setAttribute('class', 'descriptions');
        wrapped3.appendChild(enterInfo3);
        wrapped3.setAttribute('class', 'descriptions');
        wrapped4.appendChild(enterInfo4);
        wrapped4.setAttribute('class', 'descriptions');
        wrapped5.appendChild(enterInfo5);
        newButton.appendChild(wrapped1);
        newButton.appendChild(wrapped2);
        newButton.appendChild(wrapped3);
        newButton.appendChild(wrapped4);
        newButton.appendChild(wrapped5);
        parentDiv.insertBefore(newButton, existingDiv);
        newButton.classList.add('changeColor');
    }

    function displayCategoryJobs(jobList) {
        for (let i=0; i<jobList.length; i++) {
            let jobs = jobList[i];
            createElement(jobs);
        }
    }

    function clearElements() {
    let node = document.querySelectorAll('.changeColor');
        for (let j=0; j<node.length; j++) {
            if (node[j].parentNode) {
                node[j].parentNode.removeChild(node[j]);
            }; 
        }
    }

    function addClass(element) {
        element.setAttribute('href','somelink')
    }

    return {
        createElement,
        displayCategoryJobs,
        clearElements,
        addClass
    }
}