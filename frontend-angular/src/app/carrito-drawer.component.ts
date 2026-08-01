import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService, ItemCarrito } from './carrito.service';

@Component({
  selector: 'app-carrito-drawer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrito-drawer.component.html',
  styleUrls: ['./carrito-drawer.component.css']
})
export class CarritoDrawerComponent {
  private carrito = inject(CarritoService);

  abierto = false;

  readonly items = this.carrito.itemsCarrito;
  readonly subtotal = this.carrito.subtotal;
  readonly total = this.carrito.total;
  readonly totalArticulos = this.carrito.totalArticulos;

  abrir(): void {
    this.abierto = true;
  }

  cerrar(): void {
    this.abierto = false;
  }

  cambiarCantidad(item: ItemCarrito, delta: number): void {
    this.carrito.cambiarCantidad(item.producto.id, delta);
  }

  quitar(item: ItemCarrito): void {
    this.carrito.quitar(item.producto.id);
  }

  vaciar(): void {
    this.carrito.vaciar();
  }
}
