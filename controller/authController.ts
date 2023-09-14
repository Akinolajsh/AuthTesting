import express, { Request, Response } from "express";
import authModel from "../model/authModel";

export const register = async (req: Request, res: Response) => {
  try {
    
    const { name, email, password } = req.body;

    const user = await authModel.create({
      name,
      email,
      password,
    });
    return res.status(201).json({
      message: "User created",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await authModel.findOne({
      email,
    });
    return res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
