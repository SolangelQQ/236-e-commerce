import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';
@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  //templateUrl: './contactanos.component.html',
  template:`
  <article>
    <section class="apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName" />
        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName" />
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" />
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article> 
`,
  styleUrl: './contactanos.component.scss'  
})

export class ContactanosComponent implements OnInit, OnDestroy{

  route: ActivatedRoute = inject(ActivatedRoute);
  productoService = inject(ProductoService);
  // tiendaComponent: TiendaComponent | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

    @Input() idPersona = '';
    saludo!: string;

    constructor(){
        const productId = parseInt(this.route.snapshot.params['id'], 10);
        this.productoService.obtenerProductoPorId(productId);
        // this.housingLocation = housingLocation;
        
      };

      submitApplication() {
          this.productoService.submitApplication(
          this.applyForm.value.firstName ?? '',
          this.applyForm.value.lastName ?? '',
          this.applyForm.value.email ?? '',
        );
      }
  
    ngOnInit(): void {
      console.log('PROPIEDAD DE ENTRADA ESTABLECIDAS')
    }
    ngOnDestroy(): void{
      console.log('COMPONENTE SE DESTRUYE')
      window.alert('NO TE VAYAS')
    }
}

