// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

//savIn = document.getElementById('input-btn');

// console.log(savIn);

// function savInClick(){
//    console.log("HButton clicked!");
// }

//savInClick();

// // Push the value "www.awesomelead.com" to myArray when the input button is clicked

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// let inputEl = document.getElementById('input-el');


// let inputBtn =  document.getElementById('input-btn');


// inputBtn.addEventListener('click', function(){
//    // console.log("Button clicked!");
//    // Push the value "www.awesomelead.com" to myArray when the input button is clicked
//    myLeads.push(inputEl.value);
//    console.log(myLeads);
// });

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js"

  const firebaseConfig = { 

  }

const app = initializeApp(firebaseConfig);

console.log(app)

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // 2. Call the renderLeads() function
    inputEl.value=""
    renderLeads()
})

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems  
}


