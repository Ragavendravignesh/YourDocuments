import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`Mongodb connected at host: ${conn.connection.host}`);
    }catch(err) {
        console.error(`Error: ${err.stack}`);

        process.exit(1);
    }
}

export default connectDB