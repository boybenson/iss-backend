import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const generateRandomPassword = (length: number) => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=<>?";
  const allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;
  let randomPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    randomPassword += allChars.charAt(randomIndex);
  }
  return randomPassword;
};

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const comparePassword = (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatch = bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
};

export const generateAccessToken = (data: any): string => {
  const token = jwt.sign({ data }, "jwt_token", { expiresIn: "7h" });
  return token;
};
