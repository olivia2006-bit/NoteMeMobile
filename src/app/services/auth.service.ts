import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthResponse} from '../models/auth-response';
import {AuthRequest} from '../models/auth-request';
import {environment} from "../../environments/environment";
import {Preferences} from "@capacitor/preferences";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl = environment.apiUrl;
  token: string | null = null;

  private isAuthenticated = false;
  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() {
    this.init()
  }

  private async init() {
    const {value} = await Preferences.get({key: "token"})
    this.token = value
    this.isAuthenticated = this.token !== null
    if (this.isAuthenticate()) {
      this.router.navigateByUrl('/noteMe/acceuil')
    }
  }

  async login(request: AuthRequest) {
    this.http.post<AuthResponse>(`${this.apiUrl}/utilisateur/login`, request).subscribe({
      next: (value) => {
        Preferences.set({key: 'token', value: value.token}).then(result => {
          this.router.navigateByUrl('/noteMe/acceuil');
          this.isAuthenticated = true;
        });
      },
      error: (err) => {
        alert('Identifiants incorrects');
      },
    });
  }

  async logout() {
    await Preferences.remove({key: "token"})
    this.isAuthenticated = false;
    this.router.navigateByUrl('/login')
  }

  isAuthenticate(): boolean {
    return this.isAuthenticated;
  }
}
