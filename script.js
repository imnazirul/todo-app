const form = document.querySelector('form');
const todoUl = document.querySelector('#items')
const comUl = document.querySelector('.comlist-ul')
const inputElement = document.querySelector('input[type=text]')

//create and add task here
function createTask(labelText) {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    
    checkbox.type = "checkbox";
    label.innerText = labelText;

    listItem.appendChild(checkbox);
    listItem.appendChild(label)

    return listItem;
} 

function addTask(event) {
    event.preventDefault();
    let listItem = createTask(inputElement.value);

    todoUl.appendChild(listItem)
    inputElement.value = "";

    bindIncompleteItems(listItem, doneList)
} 

//done and delete function here
function doneList() {
    let listItem = this.parentNode;

    let deletebtn = document.createElement('button');
    deletebtn.innerText = "Delete";
    deletebtn.className = 'delete';

    let checkbox = listItem.querySelector('input[type="checkbox"]')
    listItem.appendChild(deletebtn)
    checkbox.remove();

    comUl.appendChild(listItem)

    bindCompleteItems(listItem, deleteTask)   
}

function deleteTask() {
    let listItem = this.parentNode;
   
    comUl.removeChild(listItem)
}

//binding incomplete and complete items here
function bindCompleteItems(_listItem, _deleteTask) {
    let deletebtn  = _listItem.querySelector('.delete');

    deletebtn.onclick = _deleteTask;
}

function bindIncompleteItems(_listItem, _doneList) {
    let checkbox = _listItem.querySelector('input[type="checkbox"]');

    checkbox.onchange = _doneList;
}

form.addEventListener('submit',
addTask)

// getting todo and com ul children
const todoChildren = todoUl.children;
const comChildren = comUl.children;

//loop for incompleteitems
for(let i = 0; i < todoChildren.length; i++) {
    bindIncompleteItems(todoChildren[i], doneList)
}
//loop for completeitems
for(let i = 0; i < comChildren.length; i++) {
    bindCompleteItems(comChildren[i], deleteTask)
}


//adding date and time to web


const Month = new Date().getMonth();
let text1 = "" ;

switch(Month) {
  case 0:
    text1 = "January";
    break;
  case 1:
    text1 = "February";
    break;
  case 2:
    text1 = "March";
    break;
  case 3:
    text1 = "April";
    break;
  case 4:
    text1 = "May";
    break;
  case 5:
    text1 = "June";
    break;
  case 6:
    text1 = "July";
    break;
  case 7:
    text1 = "Auguest";
    break;
  case 8:
    text1 = "September";
    break;
  case 9:
    text1 = "October";
    break;
  case 10:
    text1 = "November";
    break;
  case 11:
    text1 = "December";
    
}

const day = new Date().getDay();
let text = "" ;

switch(day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thrusday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    
}


function getTimeIn12HourFormat() {
  const now = new Date();
  

  const localTime = new Date().toLocaleTimeString();

  const time12HourFormat = `<h1>${localTime}</h1> <h3>${text} ${now.getDate()} ${text1}  ${now.getFullYear()} </h3>`;
    
  document.getElementById('demo').innerHTML = time12HourFormat ;
}

setInterval(getTimeIn12HourFormat, 0)
