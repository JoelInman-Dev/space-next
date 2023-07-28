export interface IAuthLoginCredentials {
  username: string | undefined;
  password: string | undefined;
}

export interface IAuthLogoutCredentials {
  username: string | undefined;
}
export interface IAuthData {
  id: string;
  name: string;
  username: string;
  email: string;
  image: string;
  role: string;
  description: string;
  profileId: string;
  updated: Date;
}
export interface IAuthRegisterCredentials {
  name: string;
  username: string;
  email: string;
  password: string;
}
export interface IAuthProfileCredentials {
  name: string;
  username: string;
  email: string;
  password: string;
}
export interface IAuthUserProfile {
  id: string;
  description: string;
  image: string;
  userId: string;
}

export interface IAuthMessage {
  error: boolean;
  message: string;
}
export interface IAuthForgotPasswordCredentials {
  "X-API-KEY"?: string | undefined;
  email: string;
}
export interface IAuthResetPasswordCredentials {
  "X-API-KEY"?: string | undefined;
  encryptedEmail?: string | null;
  newPassword: string;
}
