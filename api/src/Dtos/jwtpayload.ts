import { Roles } from "../enums/roles.enum";

export interface JwtPayload {
  id: number,
  role: Roles
}