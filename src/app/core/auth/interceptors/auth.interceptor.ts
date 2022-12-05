import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getAccessToken();
    if (token) {
      req = req.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      });
    }

    const baseUrl = this.authService.getBaseUrl();
    //const requestUrl = req.url;

    if (baseUrl){
      const requestUrl = baseUrl.concat(`/${req.url}`);
      req = req.clone({
        url: requestUrl
      });
    }

    debugger;
    return next.handle(req);
  }
}
