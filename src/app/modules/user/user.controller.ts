import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async(req: Request, res: Response) =>{
    const result = await userServices.createUserFromDb(req.body)
    res.status(200).json({
        success: true,
        message: "User is created successfully",
        data: result
    })
}

//get all
const getAllUser = async(req: Request, res: Response) =>{
    const result = await userServices.getAllUserFromDb()
    res.status(200).json({
        success: true,
        message: "User are retrieved successfully",
        data: result
    })
}

export const UserControllers = {
    createUser,
    getAllUser,
}