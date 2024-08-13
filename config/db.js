import colors from 'colors';
import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(colors.bgMagenta.white(`Connected to MongoDB Database ${conn.connection.host}`));


    } catch (error) {
        console.log(colors.bgRed.white(`Error in MongoDB: ${error}`));
    }
};

export default connectDB;