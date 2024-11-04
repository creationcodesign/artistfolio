import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import projectRoutes from './routes/project.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json()); // allows us to accept JSON data in req.body (for parsing application/json)

// PROJECTS
app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log('Example app listening on http://localhost:' + PORT + '/')
});
