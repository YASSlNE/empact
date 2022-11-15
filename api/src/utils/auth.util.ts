import User from "../entities/user";
import { Roles } from "../enums/roles.enum";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "./secrets";
import { JwtPayload } from "../Dtos/jwtpayload";
import { Request } from 'express';
import * as jwtDecode from 'jwt-decode';

export function createTokenFromUser(user: User, role: Roles): string {
  return jwt.sign({ id: user.id, role }, String(JWT_SECRET));
}

export function decodeToken(token: string): JwtPayload {
  return jwtDecode.default(token);
}

export function getToken(req: Request): string {
  return req.headers.authorization.replace("Bearer ", "");
}