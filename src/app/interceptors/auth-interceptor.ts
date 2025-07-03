import {HttpErrorResponse, HttpEvent, HttpRequest} from "@angular/common/module.d-CnjH8Dlt";
import {HttpHandlerFn} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";
import {Router} from "@angular/router";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService)
  const router = inject(Router)
  const isPublic = req.url.endsWith('/utilisateur/register') || req.url.endsWith('/utilisateur/login')
  const token = authService.token
  if (!isPublic && token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          // Optionally show a message or log out user
          console.warn('Access forbidden. Redirecting to /forbidden');
          authService.logout();
          router.navigate(['/login']); // or another route like /login
        }
        return throwError(() => error)
      })
    );

  }

  return next(req)
}
