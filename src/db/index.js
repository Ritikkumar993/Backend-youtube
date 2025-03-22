import mongoose, { connection } from "mongoose";
import { DB_NAME } from "../constants";


const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error){
        console.log("Mogodb connection error", error)
        process.exit(1)
    }
}

export default connectDB;