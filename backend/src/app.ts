import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import verificationRoutes from "./routes/verification.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "ExamForge API is running",
  });
});

app.use("/api/verification", verificationRoutes);

export default app;