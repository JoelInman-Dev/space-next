import {
  IAuthData,
  IAuthMessage,
  IAuthLoginCredentials,
  IAuthLogoutCredentials,
  IAuthResetPasswordCredentials,
  IAuthForgotPasswordCredentials,
} from "@/interfaces/IAuth";
import { ILoginCredentials } from "@/interfaces/ILoginCredentials";
import { getApiUrl } from "@/utils/ApiFunctions";

// LOGIN
export const login = async (credentials: ILoginCredentials): Promise<any> => {
  const { username, password } = credentials; // extract the credentials
  const payload: IAuthLoginCredentials = {
    grant_type: "bearer",
    username: username,
    password: password,
  };

  if (username && password) {
    const res = await fetch(getApiUrl("auth"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const response = await res.json();

    // if fetch response is ok but HOROS errored, throw error
    if (!response.status) {
      const error: IAuthMessage = {
        error: true,
        message: response.message.string,
      };

      return error;
    }

    // if fetch response is ok and HOROS is ok, return user object to session
    if (response.status) {
      const user: IAuthData = {
        id: response.user.id,
        name: response.user.username,
        email: response.user.email,
        image: response.user.avatar,
        role: response.user.role,
        capabilities: response.user.capabilities,
        accessToken: response.key,
        refreshToken: undefined,
      };

      return user;
    }
  }

  const error: IAuthMessage = {
    error: true,
    message: "Username and Password are required!",
  };

  return error;
};

// LOGOUT
export const logout = async (
  username: string,
  apiKey: string
): Promise<any> => {
  const payload: IAuthLogoutCredentials = {
    grant_type: "bearer",
    "X-API-KEY": apiKey,
    username: username,
  };

  if (username) {
    const res = await fetch(getApiUrl("auth/logout"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const response = await res.json();

    // if fetch response is ok but HOROS errored, throw error
    if (!response.status) {
      const error: IAuthMessage = {
        error: true,
        message: response.message.string,
      };

      return error;
    } else {
      return true;
    }
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

  // send the form data to an internal API endpoint and
  const res = await fetch(getApiUrl("auth/reset-password"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // get the response of the API endpoint
  const response = await res.json();

  // if fetch response is ok but HOROS errored, throw error
  const message: IAuthMessage = {
    error: response.status,
    message: response.message.string,
  };

  return message;
};
