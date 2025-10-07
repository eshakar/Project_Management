import Task from '../models/Task.js';


export const getTasksByProject = async (req, res) => {
try {
const { projectId } = req.params;
const tasks = await Task.find({ project: projectId }).sort({ createdAt: -1 });
res.json(tasks);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};


export const createTask = async (req, res) => {
try {
const { projectId } = req.params;
const { title, description } = req.body;
const task = await Task.create({ project: projectId, title, description });
res.status(201).json(task);
} catch (err) {
res.status(400).json({ message: 'Bad request' });
}
};


export const updateTask = async (req, res) => {
try {
const { id } = req.params;
const updates = req.body; // allow partial updates: title, description, status
const task = await Task.findByIdAndUpdate(id, updates, { new: true });
if (!task) return res.status(404).json({ message: 'Not found' });
res.json(task);
} catch (err) {
res.status(400).json({ message: 'Bad request' });
}
};


export const deleteTask = async (req, res) => {
try {
const { id } = req.params;
await Task.findByIdAndDelete(id);
res.json({ message: 'Task deleted' });
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};