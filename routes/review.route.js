import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createReview,
  getReviews,
  deleteReview,
  getAllReviews,
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/", verifyToken, getAllReviews);
router.get("/:gigId", getReviews);
router.delete("/:id", deleteReview);

export default router;
