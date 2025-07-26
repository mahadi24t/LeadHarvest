
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase,
         ref,
         push} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://lead-harvest-854a2-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

// let yLeads = `["www.awesomelead.com"]`
// yLeads = JSON.parse(yLeads)
// yLeads.push("www.hero.com")
// yLeads = JSON.stringify(yLeads)
// console.log(typeof yLeads)
let myLeads[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

// let name  = localStorage.setItem("myName","Md. Mahadi Hasan")

// console.log(name);
let LeadfLstorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(LeadfLstorage)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render()

    console.log( localStorage.getItem("myLeads") )
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
})


