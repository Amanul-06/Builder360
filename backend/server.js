import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    "https://builder360-seven.vercel.app",
];

app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

connectDB();

app.get("/", (req, res) => {
    res.json({
        message: "Builder360 API is running",
    });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});