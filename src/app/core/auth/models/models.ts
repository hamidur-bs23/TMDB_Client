export interface IAuthRequestTokenResponse {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface ICreateSessionResponse {
  success: boolean;
  session_id: string;
}

export interface ICreateSessionWithLoginCredentialsRequest {
  username: string;
  password: string;
  request_token: string;
}

export interface ILogoutSessionResponse {
  success: boolean;
}
