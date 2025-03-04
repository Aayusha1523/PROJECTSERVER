import express from "express";
import { login, register, update } from "../controllers/user.controller";

const router = express.Router();

// register router
router.post("/register", register);

//update user profile

router.put("/update/:id", update);

router.post("/login", login);

export default router;
