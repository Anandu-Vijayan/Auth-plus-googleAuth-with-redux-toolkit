import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from './routes/user.route.js';
import AuthRoutes from './routes/auth.route.js';

const app = express();
app.use(express.json());
dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Mongodb connected");
}).catch((err) => {
    console.log(err.message); 
});
 
  


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

app.use("/api/user",UserRoutes)
app.use("/api/auth",AuthRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false, 
        message,
        statusCode,
    })
    
})