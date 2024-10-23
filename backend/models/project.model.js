import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    technologies: {
        type: String,
        required: false
    }
},
    {
        timestamps: true // for createdAt and updatedAt
    }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
