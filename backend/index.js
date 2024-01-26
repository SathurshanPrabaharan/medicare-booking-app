import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import doctorRoute from './Routes/doctor.js'
import reviewRoute from './Routes/review.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOption = {
    origin: true
};

app.get("/", (req, res) => {
    res.send('API is working');
});

// DB connection
// mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
           
        });

        console.log('MongoDB database connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the process if unable to connect to MongoDB
    }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));
app.use('/api/v1/auth',authRoute) //domain/api/v1/auth/register
app.use('/api/v1/users',userRoute) //domain/api/v1/user/151a135b
app.use('/api/v1/doctors',doctorRoute) //domain/api/v1/doctors/151a135b
app.use('/api/v1/reviews',reviewRoute) //domain/api/v1/reviews/


app.listen(port, () => {
    // Call connectDB to establish MongoDB connection
    connectDB();
    console.log("Server is running on : http://localhost:" + port);
});
