import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
import cors from 'cors';
import { connectDB } from './config/db.js';
import projectRoutes from './routes/project.route.js';
import authRouter from './routes/auth.route.js';
import aboutSectionRouter from './routes/about.route.js';
import skillsSectionRouter from './routes/skills.route.js';
import contactSectionRouter from './routes/contact.route.js';
import heroSectionRouter from './routes/hero.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

// MIDDLEWARE
const corsOptions = {
    origin: 'https://artistfolio.onrender.com',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
};
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json()); // allows us to accept JSON data in req.body (for parsing application/json)

// ROUTES
app.use('/api/auth', authRouter);
app.use('/api/hero', heroSectionRouter);
app.use('/api/projects', projectRoutes);
app.use('/api/about', aboutSectionRouter);
app.use('/api/skills', skillsSectionRouter);
app.use('/api/contact', contactSectionRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
}

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
