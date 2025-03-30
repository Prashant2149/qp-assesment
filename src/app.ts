import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

import adminRoutes from './routes/admin.routes';
import userRoutes from './routes/user.routes';

config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));