import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
                    .then(() => {
                        console.log('Connected to DB Successfully');
                    })
                    .catch((err) => {
                        console.log(err);
                    });
}