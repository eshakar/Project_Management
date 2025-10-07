import express from 'express';
import {
getTasksByProject,
createTask,
updateTask,
deleteTask
} from '../controllers/taskController.js';


const router = express.Router();


router.get('/project/:projectId', getTasksByProject);
router.post('/project/:projectId', createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);


export default router;