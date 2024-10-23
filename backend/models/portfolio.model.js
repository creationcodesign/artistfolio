import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    live: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
},
    {
        timestamps: true // for createdAt and updatedAt
    }
);

// export default mongoose.model("Portfolio", portfolioSchema); 
const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;
