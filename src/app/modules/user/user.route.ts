import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidations } from "./user.validation";


const router = express.Router()

//route will call controller function
router.post('/',validateRequest(userValidations.createUserValidationSchema), UserControllers.createUser)
router.get('/', UserControllers.getAllUser)



export const userRoutes = router;