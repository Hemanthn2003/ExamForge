export type UserRole =
  | "STUDENT"
  | "INSTRUCTOR"
  | "PRINCIPAL";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  isActive: boolean;
}