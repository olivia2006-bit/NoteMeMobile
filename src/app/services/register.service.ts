import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UserRequest} from '../models/user-request';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() {
  }

  register(requestRegister: UserRequest) {
    this.http.post<string>(`${this.apiUrl}/utilisateur/register`, requestRegister).subscribe({
      next: (value) => {
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        alert('Erreur lors de l’inscription : ' + (err.error?.message || 'Accès interdit ou erreur serveur'));
      }
    });
  }
}
