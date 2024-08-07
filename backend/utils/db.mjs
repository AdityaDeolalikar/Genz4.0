import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(String(process.env.MONGO_URI), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
