const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task');
const alertBox = document.getElementById('alert-box');

function showAlert(message) {
    alertBox.textContent = message;
    alertBox.style.display = 'block';

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 2000);
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        showAlert('Task title cannot be empty!');
        return;
    }

    if (taskText.length > 20) { 
        showAlert('Task title is too long! Maximum 20 characters allowed.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" onchange="toggleComplete(this)">
        <span>${taskText}</span>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    showAlert('Task added successfully!');
}

function toggleComplete(checkbox) {
    checkbox.nextSibling.classList.toggle('completed');
}

function deleteTask(button) {
    button.parentNode.remove();
    showAlert('Task deleted successfully!');
}
