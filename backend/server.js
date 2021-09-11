import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import indentRoutes from './routes/indentRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/indents', indentRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(process.env.PORT, () => {
    console.log("Server is running at port 5000")
});