export interface User {
  id: string,
  name: string,
  email: string,
  password: string,
  access_token: string,
}

export interface UserSignup {
  name: string,
  email: string,
  password: string,
}
