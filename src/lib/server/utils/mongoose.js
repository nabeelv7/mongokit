import mongoose from "mongoose";
import { env } from "$env/dynamic/private";

export default async function connectMongo() {
    try {
        await mongoose.connect(env.MONGODB_URI);
    } catch (err) {
        console.error("Mongoose couldn't connect to mongodb:", err.message)
    }
}