import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
