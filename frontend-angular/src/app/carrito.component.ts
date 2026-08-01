import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService, ItemCarrito } from './carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  private carrito = inject(CarritoService);

  readonly items = this.carrito.itemsCarrito;
  readonly subtotal = this.carrito.subtotal;
  readonly igv = this.carrito.igv;
  readonly total = this.carrito.total;
  readonly totalArticulos = this.carrito.totalArticulos;

  vaciar(): void {
    this.carrito.vaciar();
  }

  cambiarCantidad(item: ItemCarrito, delta: number): void {
    this.carrito.cambiarCantidad(item.producto.id, delta);
  }

  quitar(item: ItemCarrito): void {
    this.carrito.quitar(item.producto.id);
  }
}
