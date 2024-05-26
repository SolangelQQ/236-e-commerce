import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private autenticacionService: AutenticacionService, private router: Router) { }

  login() {
    if (this.autenticacionService.login(this.username, this.password)) {
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Credenciales inválidas';
    }
  }
}
