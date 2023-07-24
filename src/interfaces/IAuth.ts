export interface IAuthLoginCredentials {
  grant_type: string | undefined;
  username: string | undefined;
  password: string | undefined;
}

export interface IAuthLogoutCredentials {
  grant_type: string | undefined;
  "X-API-KEY": string | undefined;
  username: string | undefined;
}
export interface IAuthData {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
  capabilities: string;
  accessToken: string;
  refreshToken: string | undefined;
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
  encrypted_email?: string | undefined;
  new_password: string;
}
