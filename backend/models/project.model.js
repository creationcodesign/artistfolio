import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    thumbnail: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
        default: [],
        required: false
    },
    position: {
        type: Number,
        required: false
    }
},
    {
        timestamps: true // for createdAt and updatedAt
    }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
