import express from "express";
import {
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";


const router = express.Router();

router.get("/", getAllDoctors);
router.get("/:id", getSingleDoctor);
router.put("/:id",authenticate,restrict(["doctor"]), updateDoctor);
router.delete("/:id",authenticate,restrict(["admin","doctor"]), deleteDoctor);

export default router;
