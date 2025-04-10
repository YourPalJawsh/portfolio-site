// Create object with key/value pairs
// grab from localStorage, if returns falsy (null, 0, etc), || says fall through and make an object!
// Remember const CardValues = {};
let list = JSON.parse( localStorage.getItem("todoList") ) || {};

// when the window loads, do this:
window.onload = () => {
    console.log("window.onload triggered");
    checkDarkMode();
    displayList();
}

// Save Preference to Cookies
// mode=value, expiration date
function setCookie(mode, value, days){
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expiry = "expires=" + date.toUTCString();
    document.cookie = `${mode}=${value}; ${expiry}; path=/`;
}

// Sets date to 1970, deletes cookie because it has expired.
function deleteCookie(mode){
    document.cookie = `${mode}=deleted; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

// Specify whether you want key or value
// can retrieve a key or value (key=value), ex: "darkMode"="enabled";
function getCookie(mode, typeOfData){
    if (!document.cookie) {
        return null;
    }
    let cookieArr = decodeURIComponent(document.cookie).split("; ");
    for (let c in cookieArr){
        // Make array, split into elements after "="
        let tempArr = cookieArr[c].split("=");
        let tempKey = tempArr[0].trim();
        let tempVal = tempArr[1];            
        if (typeOfData === "key" && tempKey == mode){
                return tempKey;
        }
        if (typeOfData === "value" && tempKey == mode){
                return tempVal;
        }
    }
}

// Toggle Dark mode
const darkMode = document.querySelector("#toggleDark");
    darkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            setCookie("darkMode", "enabled", 10);
        } else {
            setCookie("darkMode", "disabled", 10);
        } 
    });

function checkDarkMode() {
    let mode = getCookie("darkMode", "value");
    if (mode === "enabled"){
        console.log("Enabling dark-mode");
        document.body.classList.add("dark-mode");
    } else {
        console.log("Disabling dark-mode");
        document.body.classList.remove("dark-mode");
    }
}

// Session Storage for Interaction Tracking
let countStorage = sessionStorage.getItem("count");
if (countStorage == null) {
    sessionStorage.setItem("count", "0");
}

function incrementCount() {
    let count = parseInt(sessionStorage.getItem("count"));
    count++;
    sessionStorage.setItem("count", count);
    document.getElementById("count").innerHTML = count;
}

// Adding a task
document.getElementById("addTask").addEventListener("click", function(event) {
    event.preventDefault();
    let task = document.getElementById("taskBox").value.trim();

    if (task == "") { 
        alert("You must add a description for the task");
    } else {
        create(task);
        document.getElementById("taskBox").value = "";
        incrementCount()
    }  
});

// Look for click in a <li> in <ul>
const todoListElmnt = document.querySelector("#todo-list");
    todoListElmnt.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            let grabId = event.target.id;
            let grabKey = grabId.slice(4);
            remove(grabKey);
        }   
    });

// Make a new task in list
function create(item){
    const taskId = Object.keys(list).length + 1;
    list[taskId] = item;
    localSave();
}

// remove a task from list
function remove(key){
    key = parseInt(key);
    if(list[key]){
        delete list[key];
    } else {
        console.log("key error, no item with that number!");
    }
    localSave();
}

// save to localStorage
function localSave(){
    localStorage.setItem("todoList", JSON.stringify(list));
    displayList();
}

// display to HTML from JSON
function displayList() {
    let temp = JSON.parse(localStorage.getItem("todoList"));
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    for (let items in temp) {
        const item = document.createElement("li");
        item.textContent = temp[items];
        item.id = `tag-${items}`;
        console.log(item.id);
        todoList.appendChild(item);
    }
}

