// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

//savIn = document.getElementById('input-btn');

// console.log(savIn);

// function savInClick(){
//    console.log("HButton clicked!");
// }

//savInClick();

// Push the value "www.awesomelead.com" to myArray when the input button is clicked
let myLeads = [];
let inputEl = document.getElementById('input-el');


let inputBtn =  document.getElementById('input-btn');


inputBtn.addEventListener('click', function(){
   // console.log("Button clicked!");
   // Push the value "www.awesomelead.com" to myArray when the input button is clicked
   myLeads.push(inputEl.value);
   console.log(myLeads);
});

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push("www.awesomelead.com")
    console.log(myLeads)
})


