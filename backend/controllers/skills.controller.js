import SkillsSchema from "../models/skills.model.js";

export const getSkillsSection = async (req, res) => {
    try {
        const skills = await SkillsSchema.findOne();
        if (!skills) {
            return res.status(404).json({ message: 'skills section not found' });
        }
        res.status(200).json(skills);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


export const createOrUpdateSkillsSection = async (req, res) => {
    const { title, text, skills } = req.body;
    try {
        if (!title || !text) {
            return res.status(400).json({ message: 'title and text are required.' });
        }

        // Check if the document already exists
        const existingSkills = await SkillsSchema.findOne();

        if (existingSkills) {
            // Update the existing document
            existingSkills.title = title;
            existingSkills.text = text;
            existingSkills.skills = skills;

            await existingSkills.save();
            return res.status(200).json({
                success: true,
                message: 'skills section updated',
                data: existingSkills,
            });
        } else {
            // Create a new document if none exists
            const newSkills = new SkillsSchema({
                title,
                text,
                skills,
            });

            await newSkills.save();
            return res.status(201).json({
                success: true,
                message: 'skills section created',
                data: newSkills,
            });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};
