import express, { Application } from 'express';
import dotenv from 'dotenv';
import colors from '@colors/colors';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middleware/errorMiddleware';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

connectDB();

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(colors.yellow(`Server running on port ${PORT}`));
});
