import express from 'express';
import { getProjects, getProject, createProject, updateProject, deleteProject } from '../controllers/project.controller.js';

const projectRoutes = express.Router();

// get all projects
projectRoutes.get('/', getProjects)

// get one
projectRoutes.get('/:id', getProject);

// create project
projectRoutes.post('/', createProject);

// update
projectRoutes.put('/:id', updateProject);

// delete
projectRoutes.delete('/:id', deleteProject);

export default projectRoutes;
