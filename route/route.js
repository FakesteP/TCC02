import express from "express";
import { getUsers, createUser } from "../controller/UserController.js";

const router = express.Router();
router.get('/users', getUsers);
router.post('/tambah-data', createUser);

export default router;
