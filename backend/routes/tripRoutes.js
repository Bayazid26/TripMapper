import express from "express";
import {
  createTrip,
  getTrips,
  getTripById,
  deleteTrip,
} from "../controllers/tripController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// ALL PROTECTED ROUTES
router.post("/", protect, createTrip);
router.get("/", protect, getTrips);
router.get("/:id", protect, getTripById);
router.delete("/:id", protect, deleteTrip);

export default router;