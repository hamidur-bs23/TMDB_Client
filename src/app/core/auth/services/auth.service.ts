import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getBaseUrl() {
    return environment.api_tmdb_auth.api_base_url;
  }

  getAccessToken(){

    const token = environment.api_tmdb_auth.api_read_access_token;
    return token;
  }
}
