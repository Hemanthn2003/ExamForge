import { Router } from "express";
import { verifyDatabase } from "../controllers/verification.controller.js";

const router = Router();

router.get("/database", verifyDatabase);

export default router;