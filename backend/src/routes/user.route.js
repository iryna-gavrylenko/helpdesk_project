import { Router } from "express";
import { loginUser, registerUser, logoutUser, getUsers } from "../controllers/user.controller.js";

const router = Router();

router.route("/getUsers").get(getUsers);
router.route("/register").post(registerUser); // Route for user registration
router.route("/login").post(loginUser); // Route for user login
router.route("/logout").post(logoutUser); // Route for user logout

export default router;