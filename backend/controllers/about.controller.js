import AboutMeSectionSchema from '../models/about.model.js';

export const getAboutSection = async (req, res) => {
    try {
        const aboutMe = await AboutMeSectionSchema.findOne();
        if (!aboutMe) {
            return res.status(404).json({ message: 'About Me section not found' });
        }
        res.status(200).json(aboutMe);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


export const createOrUpdateAboutSection = async (req, res) => {
    const { title, description, imageUrl } = req.body;
    try {
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required.' });
        }

        // Check if the document already exists
        const existingAboutMe = await AboutMeSectionSchema.findOne();

        if (existingAboutMe) {
            // Update the existing document
            existingAboutMe.title = title;
            existingAboutMe.description = description;
            existingAboutMe.imageUrl = imageUrl;

            await existingAboutMe.save();
            return res.status(200).json({
                success: true,
                message: 'About Section updated',
                data: existingAboutMe,
            });
        } else {
            // Create a new document if none exists
            const newAboutMe = new AboutMeSectionSchema({
                title,
                description,
                imageUrl,
            });

            await newAboutMe.save();
            return res.status(201).json({
                success: true,
                message: 'About Section created',
                data: newAboutMe,
            });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};
