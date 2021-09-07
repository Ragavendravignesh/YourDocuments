import dotenv from 'dotenv';
import connectDB from './config/db.js'

import User from './models/userSchema.js';
import Indent from './models/indentSchema.js';
import Order from './models/orderSchema.js';

import userData from './data/users.js';
import indentData from './data/indent.js';
import orderData from './data/order.js';


dotenv.config();
connectDB();

const importData = async () => {
    try{
        await User.deleteMany();
        await Indent.deleteMany();
        await Order.deleteMany();

        const createdUsers = await User.insertMany(userData);
        const customer = createdUsers[1]._id;
        
        await Indent.insertMany(indentData);
        const ordersWithUser = orderData.map(data => { return {...data, user: customer } });

        await Order.insertMany(ordersWithUser);
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
        await Indent.deleteMany();

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