import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService } from './carrito.service';
import { CarritoDrawerComponent } from './carrito-drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, CarritoDrawerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private carrito = inject(CarritoService);

  readonly totalArticulos = this.carrito.totalArticulos;
  readonly notificacion = this.carrito.notificacionMsg;
}
