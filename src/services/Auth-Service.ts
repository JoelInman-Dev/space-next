import {
  IAuthData,
  IAuthMessage,
  IAuthLoginCredentials,
  IAuthResetPasswordCredentials,
  IAuthForgotPasswordCredentials,
  IAuthUserProfile,
  IAuthRegisterCredentials,
} from "@/interfaces/IAuth";
import { ILoginCredentials } from "@/interfaces/ILoginCredentials";
import { PrismaClient } from "@prisma/client";
import { SHA1 } from "crypto-js";
// LOGIN
export const login = async (credentials: ILoginCredentials): Promise<any> => {
  const { username, password } = credentials; // extract the credentials
  const payload: IAuthLoginCredentials = {
    username: username,
    password: password,
  };
  // if username and password provide
  if (payload) {
    const prisma = new PrismaClient();
    const loginUser = await prisma.users.findUnique({
      where: { username: username, password: SHA1(password).toString() },
    });

    if (!loginUser) {
      const error: IAuthMessage = {
        error: true,
        message: "Username or Password are incorrect!",
      };

      return error;
    } else {
      // findunique will return null if no userProfile is found for the user
      const userProfile: IAuthUserProfile | null =
        await prisma.userProfiles.findUnique({
          where: { userId: loginUser.id },
        });

      const loggedInUser: IAuthData = {
        id: loginUser.id,
        name: loginUser.name,
        username: loginUser.username,
        email: loginUser.email,
        image: userProfile ? userProfile?.image : "No Image",
        role: loginUser.role,
        description: userProfile ? userProfile?.description : "No description",
        profileId: userProfile ? userProfile?.id : "No profile",
      };
      return loggedInUser;
    }
  }
};

export const registerAccount = async (
  username: string,
  name: string,
  email: string,
  password: string
): Promise<any> => {
  const payload: IAuthRegisterCredentials = {
    name: name,
    username: username,
    email: email,
    password: password,
  };
  if (payload) {
    // update users collection with new password
    const prisma = new PrismaClient();
    // find user by email and get username and id
    const newUser = await prisma.users.create({
      data: {
        name: name,
        username: username,
        email: email,
        password: password,
        role: "user",
        created: new Date(),
        updated: new Date(),
      },
    });
    return newUser;
  }
};

// FORGOT PASSWORD
export const forgotPassword = async (email: string): Promise<any> => {
  const payload: IAuthForgotPasswordCredentials = {
    email: email,
  };

  const res = await fetch("/api/email/forgot-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // get the response of the API endpoint
  const response = await res.json();
  console.log("forgot password response: ", response);

  return response;
};

// RESET PASSWORD
export const resetPassword = async (
  newPassword: string,
  encryptedEmail: string
): Promise<any> => {
  const payload: IAuthResetPasswordCredentials = {
    encrypted_email: encryptedEmail,
    new_password: newPassword,
  };
  console.log("payload: ", payload);

  if (payload) {
    // update users collection with new password
    const prisma = new PrismaClient();
    // find user by email and get username and id
    const user = await prisma.users.findFirst({
      where: { email: encryptedEmail },
    });
    if (user) {
      const setPassword = await prisma.users.update({
        where: {
          email: encryptedEmail,
          username: user?.username,
          id: user?.id,
        },
        data: { password: SHA1(newPassword).toString() },
      });
      return setPassword;
    }
  }
};
