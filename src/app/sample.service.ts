import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./core/auth/services/auth.service";
import {map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService) {
  }
  loadData(url: string='') {
    return this.httpClient.get(url)
      .pipe(
        map(response => {
          console.log(response);
          return response;
        })
      );
  }
}
