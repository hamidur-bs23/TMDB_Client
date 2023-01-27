import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AppState} from "../../../store/app.store.state";
import {Store} from "@ngrx/store";
import {authSignupActions} from "../store/auth.actions";
import {UserSignup} from "../models/user";
import {map} from "rxjs";
import {AuthService} from "../../../core/auth/services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  signupForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private authService: AuthService) {
    this.createSignupForm();
  }

  ngOnInit(): void {
  }

  onLogin() {
    // subscription
    this.authService
      .Login()
      .pipe(map((data) => data))
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          console.log('Logging success!');
        } else {
          console.log('Logging failed!');
        }
      });
  }

  onSubmit() {
    debugger;
    if (this.signupForm.invalid){
      return;
    }
    const userSignupModel: UserSignup = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    };

    // 1. storing data on user state
    this.store.dispatch(authSignupActions.signupstart({userSignup: userSignupModel}))

    // 2. tmdb login

    // 3. update stored user state
  }

  private createSignupForm() {
    this.signupForm = this.fb.group({
      name: [null, [
        Validators.required,
        Validators.minLength(3),]
      ],
      email: [null, [
        Validators.required,
        Validators.email,]
      ],
      password: [null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),]
      ],
    })
  }

}
