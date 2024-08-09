import logModel from "../database/models/logs.model";
import userModel from "../database/models/user.model";
import {
  comparePassword,
  generateAccessToken,
  generateRandomPassword,
  hashPassword,
} from "../helpers";
import { dispatchEmail } from "../helpers/notification";

export const sign_in = async (payload: any, ip: any) => {
  const { email, password } = payload?.data;
  const userExists = await userModel.findOne({ email });
  if (!userExists) throw new Error("Invalid login credentials");
  const isMatch = await comparePassword(password, userExists.password);
  if (!isMatch) throw new Error("Invalid login credentials");
  const accessToken = generateAccessToken(userExists);
  logModel.create({
    action: "Sign In",
    dateTime: Date.now(),
    ipAddress: ip,
    staffId: userExists?.staffId,
    name: userExists?.name,
  });
  return { userExists, accessToken };
};

export const add_user = async (payload: any) => {
  const { email } = payload?.data;
  const userExists = await userModel.findOne({ email });
  if (userExists) throw new Error("User With Email Already Exists");
  const randomPassword = generateRandomPassword(12);
  const hash = await hashPassword(randomPassword);
  const newUser = await userModel.create({ ...payload?.data, password: hash });
  await dispatchEmail({
    subject: "Welcome To Procurement",
    to: email,
    html: `please welcome to our platform, login with ${randomPassword}`,
  });

  return newUser;
};

export const delete_user = async (payload: any) => {
  const { user_id } = payload;
  const deletedUser = await userModel.findOneAndDelete({ _id: user_id });
  // console.log(delete_user);

  return deletedUser;
};

export const get_users = async (ip: any) => {
  const users = await userModel.find({});
  logModel.create({
    action: "Get Users",
    dateTime: Date.now(),
    ipAddress: ip,
    name: "",
  });
  return users;
};
