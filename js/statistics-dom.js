//Getting stored registered people
var storingRegisteredPeople = getRegisteredList();
console.log(storingRegisteredPeople);

const firstUser = StoreNames(storingRegisteredPeople);

function statistics(){
    var myChart = document.getElementById('myChart').getContext('2d');

    storingRegisteredPeople?.forEach(user => {
        console.log(user?.EmploymentStatus);
    });

    const unemployedUsers = storingRegisteredPeople?.filter(user => user.EmploymentStatus === 'no');
    console.log(unemployedUsers);
    const employedUsers = storingRegisteredPeople?.filter(user => user.EmploymentStatus === 'yes');
    console.log(employedUsers);

      var massPopChart = new Chart(myChart, {
        type: 'bar',
        data: {
          labels: ['Unemployed & Searching', 'Employed & Searching'],
          datasets: [
            {
              label: 'Latest Statistics',
              data: [unemployedUsers?.length, employedUsers?.length],
              backgroundColor: ['yellow', 'pink'],
            },
          ],
        },
        option: {},
      });


      //Storing registered people list
    storeRegisteredPeople(firstUser.getStoredList());
}

// clearStorarage();
statistics();

