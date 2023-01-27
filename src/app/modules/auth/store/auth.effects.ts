import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../../core/auth/services/auth.service";
import {authSignupActions} from "./auth.actions";
import {catchError, map, switchMap, tap} from "rxjs";
import {AppState} from "../../../store/app.store.state";
import {Store} from "@ngrx/store";

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private authService: AuthService) {
  }

  login$ = createEffect(() => {

    return this.action$
      .pipe(
        ofType(authSignupActions.signupstart),
        tap((data) => {
          debugger;
          this.authService.setToLocal(data.userSignup);
        }),
        switchMap(action => {
          return this.authService.Login()
            .pipe(
              map(loginResponse => {
                debugger;
                // dispatch another action if success

                // or dispatch another action if failed
                return loginResponse;
              }),
              catchError(error => {
                // dispatch another action if error(failed)
                return error
              })
            );
        })
      )
  }, {dispatch: false})
}
