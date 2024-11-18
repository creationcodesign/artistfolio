import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: false,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: true
    },
    projectTitle: {
        type: String,
        required: false,
    },
    buttonPrimary: {
        type: String,
        required: false,
    },
    buttonSecondary: {
        type: String,
        required: false,
    },
}, { timestamps: true });


const HeroSectionSchema = mongoose.model("Hero", HeroSchema);
export default HeroSectionSchema;