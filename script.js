const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" onchange="toggleComplete(this)">
        <span>${taskText}</span>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleComplete(checkbox) {
    checkbox.nextSibling.classList.toggle('completed');
}

function deleteTask(button) {
    button.parentNode.remove();
}
