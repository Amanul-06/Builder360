import express from "express";
import {
    registerUser,
    loginUser,
} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select(
            "-password"
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});

export default router;