import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
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
    buttonText: {
        type: String,
        required: false,
    },
}, { timestamps: true });


const AboutSection = mongoose.model("Contact", ContactSchema);
export default AboutSection;