import HeroSectionSchema from '../models/hero.model.js';

export const getHeroSection = async (req, res) => {
    try {
        const hero = await HeroSectionSchema.findOne();
        if (!hero) {
            return res.status(404).json({ message: 'Hero section not found' });
        }
        res.status(200).json(hero);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


export const createOrUpdateHeroSection = async (req, res) => {
    const { title, subtitle, text, imageUrl, link, projectTitle, buttonPrimary, buttonSecondary } = req.body;

    try {
        // Check if the document already exists
        const existingHero = await HeroSectionSchema.findOne();

        if (existingHero) {
            existingHero.title = title;
            existingHero.subtitle = subtitle;
            existingHero.text = text;
            existingHero.imageUrl = imageUrl;
            existingHero.link = link;
            existingHero.projectTitle = projectTitle;
            existingHero.buttonPrimary = buttonPrimary;
            existingHero.buttonSecondary = buttonSecondary;

            await existingHero.save();
            return res.status(200).json({
                success: true,
                message: 'Hero Section updated',
                data: existingHero,
            });
        } else {
            // Create a new document if none exists
            const newHero = new HeroSectionSchema({
                title,
                text,
                imageUrl,
                link,
                projectTitle,
                buttonPrimary,
                buttonSecondary
            });

            await newHero.save();
            return res.status(201).json({
                success: true,
                message: 'Hero Section created',
                data: newHero,
            });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};
