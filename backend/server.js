import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import projectRoutes from './routes/project.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// MIDDLEWARE
app.use(express.json()); // allows us to accept JSON data in req.body (for parsing application/json)


// ROUTES
app.get('/', (_, res) => {
    res.send('Hello World!');
});

// PROJECTS
// app.use('/api/projects', require('./routes/project.route.js'));
app.use('/api/projects', projectRoutes);

// app.post('/hero', async (req, res) => {
//     const { name, image, description, technologies, github, live } = req.body; // user input
// });

app.listen(PORT, () => {
    connectDB();
    console.log('Example app listening on http://localhost:' + PORT + '/')
});
