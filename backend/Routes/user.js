import express from "express";
import {
  deleteUser,
  getAllUsers,
  getMyAppoinments,
  getSingleUser,
  getUserProfile,
  updateUser,
} from "../Controllers/userController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/",authenticate,restrict(["admin"]), getAllUsers);
router.get("/:id",authenticate,restrict(["admin","patient"]), getSingleUser);
router.put("/:id",authenticate,restrict(["patient"]), updateUser);
router.delete("/:id",authenticate,restrict(["admin","patient"]), deleteUser);
router.get("/profile/me",authenticate,restrict(["patient"]), getUserProfile);
router.get("/appoinments/my-appoinments",authenticate,restrict(["patient"]), getMyAppoinments);

export default router;
