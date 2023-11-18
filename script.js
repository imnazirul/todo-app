const form = document.querySelector('form');
const todoUl = document.querySelector('#items')
const comUl = document.querySelector('.comlist-ul')
const inputElement = document.querySelector('input[type=text]')


form.addEventListener('submit',(event) => {
    event.preventDefault();
    createTask(inputElement.value)
    inputElement.value = ""
    
})

function createTask(task) {
    const listitem = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    checkbox.type = "checkbox";
    label.innerHTML = task;
    listitem.appendChild(checkbox);
    listitem.appendChild(label);
    addTask(listitem)

    return listitem
}

function addTask(item) {
    todoUl.appendChild(item)

}

