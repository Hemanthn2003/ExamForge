import dotenv from "dotenv";
import app from "./app.js";
import connectDatabase from "./config/database.js";

dotenv.config();

const PORT = Number(process.env.PORT) || 5000;

const startServer = async (): Promise<void> => {
  try {
    await connectDatabase();

    const server = app.listen(PORT, () => {
      console.log(`
==========================================
        ExamForge Backend Server
==========================================
Environment : ${process.env.NODE_ENV || "development"}
Port        : ${PORT}
Health      : http://localhost:${PORT}/api/health
Database    : Connected
==========================================
`);
    });

    const gracefulShutdown = (signal: string) => {
      console.log(`\n${signal} received. Shutting down ExamForge server...`);

      server.close(() => {
        console.log("ExamForge server closed successfully.");
        process.exit(0);
      });
    };

    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  } catch (error) {
    console.error("Failed to start ExamForge server.");

    if (error instanceof Error) {
      console.error(error.message);
    }

    process.exit(1);
  }
};

startServer();