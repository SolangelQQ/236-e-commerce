import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ CommonModule, LoginComponent, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  constructor(public autenticacionService: AutenticacionService) { }

  logout() {
    this.autenticacionService.logout();
  }
}
