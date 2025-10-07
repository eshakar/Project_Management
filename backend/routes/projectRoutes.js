import express from 'express';
import {
getProjects,
createProject,
deleteProject,
getProjectById
} from '../controllers/projectController.js';


const router = express.Router();


router.get('/', getProjects);
router.post('/', createProject);
router.get('/:id', getProjectById);
router.delete('/:id', deleteProject);


export default router;