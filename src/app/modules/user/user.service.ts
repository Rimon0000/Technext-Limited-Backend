import { TUser } from './user.interface';
import { User } from './user.model';


//create
const createUserFromDb = async (payload: TUser) => {
  const result = await User.create(payload)
  return result;
};

//get all
const getAllUserFromDb = async () => {
  const result = await User.find();
  return result;
};

//get
const getSingleUserFromDb = async (id: number) => {
  const result = await User.findOne({ id: id });
  return result;
};




export const userServices = {
  createUserFromDb,
  getAllUserFromDb,
  getSingleUserFromDb
};
