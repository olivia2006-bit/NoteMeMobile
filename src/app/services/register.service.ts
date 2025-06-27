import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserRequest } from '../models/user-request';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor() {}

  private http = inject(HttpClient);
  private router = inject(Router);
  register(requestRegister: UserRequest) {
    this.http
      .post<string>(
        'http://localhost:8080/api/utilisateur/register',
        requestRegister
      )
      .subscribe({
      next: (value) => {
        console.log('Inscription réussie :', value);
        this.router.navigateByUrl('');
      },
      error: (err) => {
        console.error('Erreur d’inscription :', err);
        alert('Erreur lors de l’inscription : ' + (err.error?.message || 'Accès interdit ou erreur serveur'));
      }
    });
  }
}
