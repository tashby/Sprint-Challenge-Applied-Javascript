// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function createTab(data){
    const showTopic = document.createElement('div');
        showTopic.classList.add('tab');
        showTopic.textContent = data;

    const allTopics = document.querySelector('.topics');
        allTopics.appendChild(showTopic);
}


axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then((response) => {
        response.data.topics.forEach(topic => {
            createTab(topic);
        });   
    })
    .catch((error) => { 
        console.log(error);
    })