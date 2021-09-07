import express from 'express';
import { addOrder, deleteOrder, updateOrder, getOrders, getMyOrder } from '../controller/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route("/").post(protect, addOrder).get(getOrders);
router.route("/myorder").get(protect, getMyOrder);
router.route("/:id").put(protect, updateOrder).delete(protect, deleteOrder);

export default router;