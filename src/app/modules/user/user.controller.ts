import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async(req: Request, res: Response) =>{
    const result = await userServices.createUserFromDb(req.body)
    res.status(200).json({
        success: true,
        message: "User is created successfully",
        user: result
    })
}

//get all
const getAllUser = async(req: Request, res: Response) =>{
    const result = await userServices.getAllUserFromDb()
    res.status(200).json({
        success: true,
        message: "User are retrieved successfully",
        user: result
    })
}

//get single
const getSingleUser = async(req: Request, res: Response) =>{
    const id = req.params.id
    const result = await userServices.getSingleUserFromDb(id)
    res.status(200).json({
        success: true,
        message: "User is retrieved successfully",
        user: result
    })
}

export const UserControllers = {
    createUser,
    getAllUser,
    getSingleUser
}