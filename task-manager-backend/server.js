const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
let tasks = [];
let id = 1;
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});
app.post('/api/tasks', (req, res) => {
    const newTask = { id: id++, name: req.body.name };
    tasks.push(newTask);
    res.json(newTask);
});
app.delete('/api/tasks/:id', (req, res) => {
    tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
    res.sendStatus(204);
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
