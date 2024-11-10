import mongoose from "mongoose";

const SkillsSectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
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


const SkillsSchema = mongoose.model("SkillsSection", SkillsSectionSchema);
export default SkillsSchema;