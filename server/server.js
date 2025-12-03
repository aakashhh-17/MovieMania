import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import connectDB from "./configs/db.js";
dotenv.config();
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import showRouter from './routes/showRoutes.js'
import bookingRouter from './routes/bookingRoutes.js'

const app = express();
const port = process.env.PORT;

await connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())

app.get('/', (req, res)=>res.send('Server is live!'));
app.use('/api/inngest', serve({ client: inngest, functions }))

app.use('/api/show', showRouter)
app.use('/api/booking', bookingRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
