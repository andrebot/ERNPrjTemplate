import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

/**
 * Interface for the Token
 */
export type Tokens = {
  /**
   * Access Token generated by the server
   */
  accessToken: string;
  /**
   * Refresh Token generated by the server
   */
  refreshToken: string;
};

/**
 * Interface for the Token
 */
export interface Token extends jwt.Jwt {
  /**
   * Payload of the token. It contains the email, role, first name and last name
   */
  payload: {
    /** Email of the user */
    email: string;
    /** Role of the user. Can be either 'admin' or 'user' */
    role: 'admin' | 'user';
    /** First name of the user */
    firstName: string;
    /** Last name of the user */
    lastName: string;
  }
}

/**
 * Interface for the User Payload
 */
export type UserPayload = {
  /** Email of the user */
  email?: string;
  /** First name of the user */
  firstName?: string;
  /** Last name of the user */
  lastName?: string;
  /** Role of the user. Can be either 'admin' or 'user' */
  role?: 'admin' | 'user';
};

export interface RequestWithUser extends Request {
  user?: UserPayload;
}

/**
 * Interface for token validation middleware
 */
/* eslint-disable no-unused-vars */
export type TokenValidationMiddleware = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => void;
/* eslint-enable no-unused-vars */
