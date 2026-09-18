import mongoose from "mongoose";

const connectDatabase = async (): Promise<void> => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
  }

  try {
    await mongoose.connect(mongoUri);

    console.log("MongoDB connected successfully.");
    console.log(`Database: ${mongoose.connection.name}`);
  } catch (error) {
    console.error("MongoDB connection failed.");

    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};

export default connectDatabase;