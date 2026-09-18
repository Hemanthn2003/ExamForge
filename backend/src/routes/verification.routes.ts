import { Router } from "express";
import { verifyDatabase } from "../controllers/verification.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";

const router = Router();

router.get(
  "/database",
  authenticate,
  authorizeRoles("INSTRUCTOR", "PRINCIPAL"),
  verifyDatabase
);

export default router;