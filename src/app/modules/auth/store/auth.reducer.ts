import {createFeature, createReducer, on} from "@ngrx/store";
import {AuthState, initialState} from "./auth.state";
import {authSignupActions} from "./auth.actions";
import {User} from "../models/user";

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer<AuthState>(
    initialState,
    // Signup Start
    on(authSignupActions.signupstart, (state, action) => {
      debugger;
      state = {
        ...state,
        user: {
          name: action.userSignup.name,
          email: action.userSignup.email,
          password: action.userSignup.password,
          id: '',
          access_token: ''
        },
      }
      return state;
    }),
    // Signup Success
    on(authSignupActions.signupsuccess, (state, action) => {
      debugger;
      const loggedUser: User = {
        ...state.user,
        id: action.id,
        access_token: action.access_token,
      };
      state = {
        ...state,
        user: loggedUser,
      };
      return state;
    }),
    // Signup Failed
    on(authSignupActions.signupfail, (state) => {
      debugger;

      state = {
        ...state,
        user: {
          id: '',
          name: '',
          email: '',
          password: '',
          access_token: ''
        }
      }
      return state;
    }),
  )
});
