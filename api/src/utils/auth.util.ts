import User from "../entities/user";
import { Roles } from "../enums/roles.enum";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "./secrets";

export function createTokenFromUser(user: User, role: Roles): string {
  return jwt.sign({ id: user.id, role }, String(JWT_SECRET));
}