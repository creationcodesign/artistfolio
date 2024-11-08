import mongoose from "mongoose";

// Define the schema for the "About Me" section
const AboutMeSectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
}, { timestamps: true });


const AboutSection = mongoose.model("AboutMeSection", AboutMeSectionSchema);
export default AboutSection;