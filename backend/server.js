import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import projectRoutes from './routes/project.route.js';
import authRouter from './routes/auth.route.js';
import aboutSectionRouter from './routes/about.route.js';
import skillsSectionRouter from './routes/skills.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // allows us to accept JSON data in req.body (for parsing application/json)

// ROUTES
app.use('/api/auth', authRouter);
app.use('/api/projects', projectRoutes);
app.use('/api/about', aboutSectionRouter);
app.use('/api/skills', skillsSectionRouter);


// LISTEN
// Connect to the database and start the server
const startServer = async () => {
    try {
        await connectDB(); // Ensure the database connection is established
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}/`);
        });
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit process with failure
    }
};

startServer();

// app.listen(PORT, () => {
//     connectDB();
//     console.log('Example app listening on http://localhost:' + PORT + '/')
// });
