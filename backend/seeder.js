import dotenv from 'dotenv';
import connectDB from './config/db.js'

import User from './models/userSchema.js';

import userData from './data/users.js';

dotenv.config();
connectDB();

const importData = async () => {
    try{
        await User.deleteMany();
        await User.insertMany(userData);

        console.log("Data Imported");

        process.exit();
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}

const deleteData = async() => {
    try {
        await User.deleteMany();

        console.log("Data deleted successfully!");

        process.exit();
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

if(process.argv[2] === '-i') {
    importData();   
}
if(process.argv[2] === '-d') {
    deleteData();
}