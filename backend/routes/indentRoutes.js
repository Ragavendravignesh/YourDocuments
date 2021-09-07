import express from 'express';
import { addIndent, deleteIndent, getIndentByDate, getIndents, updateIndent } from '../controller/indentController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route("/")
    .get(protect, admin, getIndents)
    .post(protect, admin, addIndent);

router.route("/id").get(protect, admin, getIndentByDate);

router.route("/:id")
.put(protect, admin, updateIndent)
.delete(protect, admin, deleteIndent);

export default router;