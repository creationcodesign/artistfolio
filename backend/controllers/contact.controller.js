import ContactSchema from '../models/contact.model.js';

export const getContactSection = async (req, res) => {
    try {
        const aboutMe = await ContactSchema.findOne();
        if (!aboutMe) {
            return res.status(404).json({ message: 'Contact section not found' });
        }
        res.status(200).json(aboutMe);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


export const createOrUpdateContactSection = async (req, res) => {
    const { title, description, imageUrl, buttonText } = req.body;

    try {
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required.' });
        }

        // Check if the document already exists
        const existingContact = await ContactSchema.findOne();

        if (existingContact) {
            // Update the existing document
            existingContact.title = title;
            existingContact.description = description;
            existingContact.imageUrl = imageUrl;
            existingContact.buttonText = buttonText;

            await existingContact.save();
            return res.status(200).json({
                success: true,
                message: 'Contact Section updated',
                data: existingContact,
            });
        } else {
            // Create a new document if none exists
            const newContact = new ContactSchema({
                title,
                description,
                imageUrl,
                buttonText
            });

            await newContact.save();
            return res.status(201).json({
                success: true,
                message: 'Contact Section created',
                data: newContact,
            });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};
