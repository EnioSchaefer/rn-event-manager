import { Request, Response } from 'express';
import { UserLogin, UserRegister } from '../types/UserInputTypes';
const { UserService } = require('../services');

const register = async (req: Request, res: Response) => {
  try {
    const userData: UserRegister = req.body;

    const registration = await UserService.register(userData);

    return res.status(201).json(registration);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};