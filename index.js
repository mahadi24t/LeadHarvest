// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

//savIn = document.getElementById('input-btn');

// console.log(savIn);

// function savInClick(){
//    console.log("HButton clicked!");
// }

//savInClick();

let inputBtn =  document.getElementById('input-btn');
inputBtn.addEventListener('click', function(){
   console.log("Button clicked!");
});

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = [];
let inputEl = document.getElementById('input-el');
