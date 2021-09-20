import Order from '../models/orderSchema.js';
import asyncHandler from 'express-async-handler';

const addOrder = asyncHandler(async (req, res) => {
    const { amount, mobileno, date, message, name } = req.body;
    const newData = new Order({
        user: req.user._id,
        name,
        mobileno,
        amount,
        date,
        message
    });

    try {
        const data = await Order.create(newData);
        res.json(data);
    } catch(err) {
        res.status(401);
        throw new Error('Data not found');
    }

    res.json(data);
});

const updateOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    const { amount, date, message, user, mobileno, name } = req.body;

    if(order) {
        order.user = user || req.user._id;
        order.name = name || order.name
        order.mobileno = mobileno || order.mobileno
        order.amount = amount || order.amount;
        order.date = date || order.date;
        order.message = message || order.message;

        await order.save();

        res.json(order);
    } else {
        res.status(401)
        throw new Error("Order not found")
    }
}); 

const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if(order) {
        await order.remove();

        res.json({ message: "Order deleted" });
    } else {
        res.status(401);

        throw new Error("Order deleted")
    }
});

const getOrders = asyncHandler(async (req, res) => {

    const page = Number(req.query.page) || 1;
    const pageSize = 1;
    const skip = ((page - 1) * pageSize );

    const count = await Order.countDocuments();
    const orders = await Order.find({}).limit(pageSize).skip(skip);

    res.json({orders, page, pages: Math.ceil(count / pageSize)});
});

const getMyOrder = asyncHandler(async (req, res) => {
    const order = await Order.find({ user: req.user._id });

    if(order) {
        res.json(order)
    } else {
        res.status(401);
        throw new Error('Order not founded');
    }
})

export { addOrder, updateOrder, deleteOrder, getOrders, getMyOrder }