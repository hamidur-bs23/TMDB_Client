import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  constructor(private httpClient: HttpClient) {}
  loadData() {
    let url = `${environment.api_tmdb_auth.api_base_url}/4/list/1`; //'https://api.themoviedb.org/4/list/1';
    return this.httpClient.get(url);
  }
}
