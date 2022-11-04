import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { ConnectionOptions } from "mongodb";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();
const connectionString = process.env.ATLAS_URI as string;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions;

export default mongoose
  .connect(connectionString!, options)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("error", err);
  });
