import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import taskRoutes from './routes/taskRoutes.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


connectDB();


app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);


app.get('/', (req, res) => res.send('Mini TaskBoard API running'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));