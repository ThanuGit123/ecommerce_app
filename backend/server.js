import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());

// ✅ API routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

// ✅ Default test route
app.get('/', (req, res) => {
  res.send('API WORKING...');
});

app.listen(port, () => {
  console.log('Server start on port: ' + port);
});
