import {User} from "../models/user";

export interface AuthState {
  user: User,
}

export const initialState: AuthState = {
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    access_token: '',
  },
}
