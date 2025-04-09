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
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value)
   console.log(myLeads)
   
})


for (let i = 0; i < myLeads.length; i++) {
   // // console.log(myLeads[i])
   // ulEl.innerHTML +=  "<li>" + myLeads[i] + "</li>"
   const li = document.createElement("li");
   li.textContent = myLeads[i];
   ulEl.appendChild(li);
}


