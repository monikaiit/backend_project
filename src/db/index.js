import mongoose from "mongoose";    
import { DB_name } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`);
        console.log(`\n MongoDB connected: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log("ERROR: ", error);
        process.exit(1);
    }

}

export default connectDB;