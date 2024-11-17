import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

export default dbConnect;
