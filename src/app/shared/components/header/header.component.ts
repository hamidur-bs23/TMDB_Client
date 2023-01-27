import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter, OnInit,
  Output,
} from '@angular/core';
import {AppState} from "../../../store/app.store.state";
import {Store} from "@ngrx/store";
import {isLoggedInUser, selectAuthState} from "../../../modules/auth/store/auth.selector";
import {tap} from "rxjs";
import {User} from "../../../modules/auth/models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() menuToggled = new EventEmitter<boolean>();

  user: User = {
    id: '',
    name: '',
    email: '',
    password: '',
    access_token: '',
  };
  isAuthenticated: boolean = false;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store.select(selectAuthState).pipe(
      tap(tap => console.log(tap))
    ).subscribe(data => {
        console.log(data);
        this.user = data.user;
      }
    );

    this.store.select(isLoggedInUser)
      .subscribe(data => this.isAuthenticated = data);
  }


  logout(): void {
    console.log('Logged out');
  }
}
