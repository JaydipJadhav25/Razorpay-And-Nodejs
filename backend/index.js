import express from 'express';
import dotenv from 'dotenv';
// Configure .env
dotenv.config();
import cors from 'cors';
import paymentRouter from "./routes/payment.routes.js"


const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/v1/payment/" , paymentRouter);

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});