import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: string;
  role: "STUDENT" | "INSTRUCTOR" | "PRINCIPAL";
}

const getJwtSecret = (): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined.");
  }

  return secret;
};

export const verifyToken = (token: string): JwtPayload => {
  const decoded = jwt.verify(token, getJwtSecret());

  if (
    typeof decoded !== "object" ||
    decoded === null ||
    !("userId" in decoded) ||
    !("role" in decoded)
  ) {
    throw new Error("Invalid JWT payload.");
  }

  return decoded as JwtPayload;
};