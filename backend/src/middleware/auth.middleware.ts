import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.js";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    role: "STUDENT" | "INSTRUCTOR" | "PRINCIPAL";
  };
}

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      res.status(401).json({
        success: false,
        message: "Authentication token is required.",
      });
      return;
    }

    const [scheme, token] = authorization.split(" ");

    if (scheme !== "Bearer" || !token) {
      res.status(401).json({
        success: false,
        message: "Invalid authorization format. Use Bearer <token>.",
      });
      return;
    }

    const payload = verifyToken(token);

    req.user = {
      userId: payload.userId,
      role: payload.role,
    };

    next();
  } catch (error) {
    console.error("JWT authentication failed:", error);

    res.status(401).json({
      success: false,
      message: "Invalid or expired authentication token.",
    });
  }
};