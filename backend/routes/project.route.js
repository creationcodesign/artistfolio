import express from 'express';
// import mongoose from 'mongoose';
// import Project from './models/project.model.js';
import { getProjects, getProject, createProject, updateProject, deleteProject } from '../controllers/project.controller.js';

const projectRoutes = express.Router();

// get all projects
projectRoutes.get('/', getProjects)
// projectRoutes.get('/', async (req, res) => {
//     try {
//         const projects = await Project.find({});
//         res.status(200).json({ success: true, data: projects });
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Internal server error while getting projects.' });
//     }
// });


// get one
projectRoutes.get('/:id', getProject);

// create project
projectRoutes.post('/', createProject);

// update
projectRoutes.put('/:id', updateProject);

// delete
projectRoutes.delete('/:id', deleteProject);

export default projectRoutes;
