import { Component } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from '../../../../core/auth/services/auth.service';
import { SampleService } from '../../../../sample.service';
import {UserSignup} from "../../../auth/models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  sampleData: any;

  constructor(
    private authService: AuthService,
    private sampleService: SampleService
  ) {}

  onLoadData() {
    this.sampleService.loadData().subscribe((response) => {
      this.sampleData = response;
      console.log(this.sampleData);
    });
  }

  onCreateRequestToken() {
    this.authService.CreateRequestToken();
  }

  onCreateSession() {
    this.authService.CreateSession();
  }

  onCreateSessionWithUserCredential() {
    this.authService.CreateSessionWithUserCredentials(
      'hamidpioneer',
      'Hamid@22152215'
    );
  }

  onLogout() {
    // TODO: subscription =
    this.authService.Logout().subscribe((response) => {
      if (response) {
        console.log('Logging out done!');
      } else {
        console.log('Something is wrong!');
      }
    });
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

  setToLocalStorage(data: UserSignup){

  }
}
