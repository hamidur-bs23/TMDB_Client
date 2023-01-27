import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, of, switchMap } from 'rxjs';
import {
  IAuthRequestTokenResponse,
  ICreateSessionResponse,
  ICreateSessionWithLoginCredentialsRequest,
  ILogoutSessionResponse,
} from '../models/models';
import {UserSignup} from "../../../modules/auth/models/user";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getBaseUrl() {
    return environment.api_tmdb_auth.api_base_url;
  }

  getApiKey() {
    return environment.api_tmdb_auth.api_key;
  }

  getApiReadAccessToken() {
    return environment.api_tmdb_auth.api_read_access_token;
  }

  Login() {
    this.Logout();
    return this.CreateRequestToken().pipe(
      switchMap((requestToken: IAuthRequestTokenResponse) => {
        return this.AuthorizeUserRequestToken(
          requestToken.request_token,
          `${environment.api_tmdb_auth.redirect_to_url}`
        ).pipe(
          switchMap(() => {
            return this.CreateSession();
          })
        );
      })
    );
  }

  // ver: 3
  CreateRequestToken() {
    const url = `${environment.api_tmdb_auth.api_base_url}/3/authentication/token/new`;

    return this.httpClient.get<IAuthRequestTokenResponse>(url).pipe(
      map((response) => {
        if (response.success) {
          localStorage.setItem('user-request-token', response.request_token);
        }
        return response;
      })
    );
  }

  AuthorizeUserRequestToken(requestToken: string, redirect_to_url: string) {
    let url: string = `${environment.api_tmdb_auth.authorize_user_base_url}/${requestToken}?redirect_to=${redirect_to_url}`;

    // window.open(url, '_blank');
    window.open(url, '_self');

    return of(true);
  }

  // ver: 3
  CreateSession() {
    const url: string = `${
      environment.api_tmdb_auth.api_base_url
    }/3/authentication/session/new?api_key=${this.getApiKey()}`;
    const requestToken: string =
      localStorage.getItem('user-request-token') ?? '';

    if (requestToken.trim().length <= 0) {
      return of(false);
    }

    const body = { request_token: `${requestToken}` };

    return this.httpClient.post<ICreateSessionResponse>(url, body).pipe(
      map((response) => {
        if (response.success) {
          console.log(response);
          localStorage.setItem('user-session-id', response.session_id);
        }
        return response.success;
      })
    );
  }

  // ver: 3
  CreateGuestSession() {
    const url: string = `${
      environment.api_tmdb_auth.api_base_url
    }/3/authentication/guest_session/new?api_key=${this.getApiKey()}`;
    const requestToken: string =
      localStorage.getItem('user-request-token') ?? '';

    if (requestToken.trim().length <= 0) {
      return of(false);
    }

    const body = { request_token: `${requestToken}` };

    return this.httpClient.post<ICreateSessionResponse>(url, body).pipe(
      map((response) => {
        if (response.success) {
          console.log(response);
          localStorage.setItem('user-session-id', response.session_id);
        }
        return response.success;
      })
    );
  }

  // ver: 3
  CreateSessionWithUserCredentials(username: string, password: string) {
    const requestToken: string =
      localStorage.getItem('user-request-token') ?? '';
    const body: ICreateSessionWithLoginCredentialsRequest = {
      username: username,
      password: password,
      request_token: requestToken,
    };
    //https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=4dfa26a4ddff60c8f04822745645f839
    const url = `${
      environment.api_tmdb_auth.api_base_url
    }/3/authentication/token/validate_with_login?api_key${this.getApiKey()}`;

    this.httpClient.post<IAuthRequestTokenResponse>(url, body).pipe(
      map((response) => {
        if (response.success) {
          localStorage.setItem('user-request-token', response.request_token);
        }
        return response;
      })
    );
  }

  // ver: 3
  Logout() {
    const url = `${
      environment.api_tmdb_auth.api_base_url
    }/3/authentication/session?api_key=${this.getApiKey()}`;
    const sessionId = localStorage.getItem('user-session-id');
    if (sessionId) {
      localStorage.removeItem('user-session-id');
      localStorage.removeItem('user-request-token');

      return this.httpClient
        .delete<ILogoutSessionResponse>(url, {
          body: {
            session_id: `${sessionId}`,
          },
        })
        .pipe(map((response) => response.success));
    } else {
      return of(false);
    }
  }

  setToLocal(data: UserSignup) {
    const name = 'user-signup-info';

    let valueStr = JSON.stringify(data);
    if (valueStr === undefined) valueStr = '';

    localStorage.setItem(name, valueStr);
  }

  getFromLocal(name: string) {
    return localStorage.getItem(name) ?? '';
  }
}
