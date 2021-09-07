import Order from '../models/orderSchema.js';
import asyncHandler from 'express-async-handler';

const addOrder = asyncHandler(async (req, res) => {
    const { amount, date, message } = req.body;

    console.log(req.user._id);
    const newData = new Order({
        user: req.user._id,
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
    const { amount, date, message, user } = req.body;

    if(order) {
        order.user = user || req.user._id;
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
    const orders = await Order.find({});

    res.json(orders);
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