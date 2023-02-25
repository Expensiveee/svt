import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(
    "mongodb+srv://root:Ghali2005@svt.tvirorl.mongodb.net/svt?retryWrites=true&w=majority"
  );

export default connectMongo;
