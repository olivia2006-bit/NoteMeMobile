import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from '../models/auth-response';
import { AuthRequest } from '../models/auth-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private isAuthenticated = false;
  private http = inject(HttpClient);
  private router = inject(Router);

  login(request: AuthRequest) {
    this.http
      .post<AuthResponse>(
        'http://localhost:8080/api/utilisateur/login',
        request
      )
      .subscribe({
        next: (value) => {
          this.isAuthenticated = true;
          this.router.navigateByUrl('/noteMe/acceuil');
          //console.log(value);
        },
        error: (err) => {
          console.error('Erreur de connexion :', err);
          alert('Identifiants incorrects');
        },
      });
    // this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isAuthenticate(): boolean {
    return this.isAuthenticated;
  }
}
