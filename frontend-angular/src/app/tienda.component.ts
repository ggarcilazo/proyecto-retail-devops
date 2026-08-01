import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService, Producto } from './carrito.service';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  private carrito = inject(CarritoService);

  readonly productos = this.carrito.catalogo;
  readonly enCarrito = computed(() => {
    const mapa = new Map<number, number>();
    for (const item of this.carrito.itemsCarrito()) {
      mapa.set(item.producto.id, item.cantidad);
    }
    return mapa;
  });

  agregar(producto: Producto): void {
    this.carrito.agregar(producto);
  }
}
