import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);

        // above was in the past
        // const connection = await mongoose.connect(process.env.MONGO_URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); // process code 1 is an error, 0 is success
    }
}