import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private isAuthenticated = false;
  private userRole: string | null = null;
  constructor() { }

  login(username: string, password: string): boolean {
    // Aquí debes hacer una solicitud a tu API para autenticar al usuario
    // Esto es solo un ejemplo simple
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
      return true;
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      this.userRole = 'user';
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = null;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getRole(): string | null {
    return this.userRole;
  }
}
