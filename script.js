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
