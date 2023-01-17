import {authFeature} from "./auth.reducer";
import {createSelector} from "@ngrx/store";
import {User} from "../models/user";

export const {
  name,
  reducer,
  selectAuthFeatureState,
  selectUser,
} = authFeature;

export const isLoggedInUser = () => {
  createSelector(selectUser, (state: User) => {
    return state.access_token.length > 0 ? true : false;
  })
}
