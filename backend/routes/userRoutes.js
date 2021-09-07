import express from 'express';
import { authUser, getProfile, registerUser, updateProfile, getUsers, getUserById, updateUser, deleteUser } from '../controller/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router();

router.route('/login').post(authUser);

router.route('/profile')
.get(protect, getProfile)
.put(protect, updateProfile);

router.route('/').post(registerUser);
router.route('/').get(protect, admin, getUsers);

router.route("/:id")
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)
    .delete(protect, admin, deleteUser);

export default router;