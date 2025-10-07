import Project from '../models/Project.js';
import Task from '../models/Task.js';


export const getProjects = async (req, res) => {
try {
const projects = await Project.find().sort({ createdAt: -1 });
res.json(projects);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};


export const createProject = async (req, res) => {
try {
const { name, description } = req.body;
const project = await Project.create({ name, description });
res.status(201).json(project);
} catch (err) {
res.status(400).json({ message: 'Bad request' });
}
};


export const deleteProject = async (req, res) => {
try {
const { id } = req.params;
await Task.deleteMany({ project: id });
await Project.findByIdAndDelete(id);
res.json({ message: 'Project deleted' });
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};


export const getProjectById = async (req, res) => {
try {
const { id } = req.params;
const project = await Project.findById(id);
if (!project) return res.status(404).json({ message: 'Not found' });
res.json(project);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};