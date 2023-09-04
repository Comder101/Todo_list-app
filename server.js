const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body.task;
    if (!newTask || newTask.trim() === '') {
        return res.status(400).json({ error: 'Task title cannot be empty' });
    }
    tasks.push(newTask);
    res.status(201).json({ message: 'Task created successfully' });
});

app.delete('/tasks/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index < 0 || index >= tasks.length) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(index, 1);
    res.status(200).json({ message: 'Task deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
