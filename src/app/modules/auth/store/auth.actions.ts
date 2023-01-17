import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {UserSignup} from "../models/user";

export const authSignupActions = createActionGroup({
  source: 'Auth Page - Signup',
  events: {
    signupStart: props<{ userSignup: UserSignup }>(),
    signupSuccess: props<{id: string, access_token: string}>(),
    signupFail: emptyProps(),
  }
});
