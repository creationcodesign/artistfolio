import mongoose from "mongoose";

const SkillsSectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        default: [],
        required: false
    },
}, { timestamps: true });


const AboutSection = mongoose.model("SkillsSection", SkillsSectionSchema);
export default AboutSection;