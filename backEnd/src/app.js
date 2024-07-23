// import express from "express"
// import cors from "cors"
// import cookieParser from "cookie-parser"

// const app = express()

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))
// app.use(express.json({ limit: "16kb" }))
// app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// app.use(express.static("public"))
// app.use(cookieParser())


// export { app }

// deva *************************
import express from 'express';
import mongoose from 'mongoose';
import productsRouter from './models/products';  // Adjust the path as necessary

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productsRouter);

// Database connection and server start
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/pharmacy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Database connection error:', error);
});
