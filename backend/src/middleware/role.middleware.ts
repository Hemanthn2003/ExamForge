import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./auth.middleware.js";

type AllowedRole = "STUDENT" | "INSTRUCTOR" | "PRINCIPAL";

export const authorizeRoles = (...allowedRoles: AllowedRole[]) => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({
        success: false,
        message: "You do not have permission to access this resource.",
      });
      return;
    }

    next();
  };
};