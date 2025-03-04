import { Request, Response } from "express";
import User from "../user.models";
import { PasswordHash } from "../../../utils/bcrypt.utils";
export const register = async (req: Request, res: Response) => {
  try {
    // const {firstName ,lastName,email,password}= req.body;// like this can also be used instead of below
    const body = req.body;
    // const hashedPassword = PasswordHash;
    const user = await User.create(body);
    // const user = new User();

    res.status(201).json({
      status: "success",
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "fail",
      success: "fail",
      message: error?.message || "Something went wrong",
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { firstName, lastNameame, gender, phoneNumber } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastNameame,
        gender,
        phoneNumber,
      },
      { new: true }
    );

    if (!user) {
      res.status(404).json({
        status: "fail",
        success: "false",
        message: "User not found",
      });
    }

    res.status(201).json({
      status: "success",
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "fail",
      success: "fail",
      message: error?.message || "Something went wrong",
    });
  }
};

export const  login = (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello Aayusha" });
};
