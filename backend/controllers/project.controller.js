import mongoose from 'mongoose';
import Project from '../models/project.model.js';

// get all
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error while getting projects.' });
    }
}

// get one
export const getProject = async (req, res) => {
    async (req, res) => {
        try {
            const projects = await Project.find({ _id: req.params.id });
            res.status(200).json({ success: true, data: projects });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal server error while getting projects.' });
        }
    }
}

// create project
export const createProject = async (req, res) => {
    const project = req.body; // user input
    if (!project.name || !project.link || !project.thumbnail) {
        return res.status(400).json({ success: false, message: 'please provide all fields' });
    }
    const newProject = new Project(project);
    try {
        await newProject.save();
        res.status(201).json({ success: true, message: 'Project created', data: newProject });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error while creating project.' });
    }
};

// update
export const updateProject = async (req, res) => {
    const { id } = req.params;
    const project = req.body;
    if (!id || !project || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: 'please provide all fields' });
    }
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, project, { new: true });
        if (!updatedProject || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }
        res.status(200).json({ success: true, message: 'Project updated', data: updatedProject });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error while updating project.' });
    }
};

// delete
export const deleteProject = async (req, res) => {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: 'please provide all fields' });
    }
    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }
        res.status(200).json({ success: true, message: 'Project deleted', data: deletedProject });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error while deleting project.' });
    }
};
