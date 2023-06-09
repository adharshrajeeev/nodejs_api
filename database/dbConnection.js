import mongoose from "mongoose";


export const  connectDB = async (uri) => {
    try {
      const conn = await mongoose.connect(uri, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }