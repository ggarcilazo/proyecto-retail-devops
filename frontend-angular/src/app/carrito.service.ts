import { Injectable, signal, computed } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  imagen: string;
}

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

function imagen(id: number): string {
  const archivos: Record<number, string> = {
    1: 'assets/products/taladro.jpg',
    2: 'assets/products/pintura.jpg',
    3: 'assets/products/herramientas.jpg',
    4: 'assets/products/canyo.jpg',
    5: 'assets/products/lampara.jpg',
    6: 'assets/products/meson.jpg'
  };
  return archivos[id] ?? archivos[1];
}

@Injectable({ providedIn: 'root' })
export class CarritoService {
  readonly catalogo: Producto[] = [
    { id: 1, nombre: 'Taladro inalámbrico 18V', categoria: 'Herramientas eléctricas', precio: 349.9, stock: 12, imagen: imagen(1) },
    { id: 2, nombre: 'Pintura látex blanca 4L', categoria: 'Pinturas y acabados', precio: 89.5, stock: 30, imagen: imagen(2) },
    { id: 3, nombre: 'Set de destornilladores 24 pzas', categoria: 'Herramientas manuales', precio: 129.9, stock: 18, imagen: imagen(3) },
    { id: 4, nombre: 'Caño de cocina cromado', categoria: 'Sanitarios', precio: 189.0, stock: 8, imagen: imagen(4) },
    { id: 5, nombre: 'Lámpara LED interior 20W', categoria: 'Iluminación', precio: 74.9, stock: 25, imagen: imagen(5) },
    { id: 6, nombre: 'Mesón de mármol 120cm', categoria: 'Acabados', precio: 429.0, stock: 5, imagen: imagen(6) }
  ];

  private readonly items = signal<ItemCarrito[]>([]);
  private readonly notificacion = signal('');

  readonly itemsCarrito = this.items.asReadonly();
  readonly notificacionMsg = this.notificacion.asReadonly();
  readonly totalArticulos = computed(() =>
    this.items().reduce((acc, item) => acc + item.cantidad, 0)
  );
  readonly subtotal = computed(() =>
    this.items().reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0)
  );
  readonly igv = computed(() => this.subtotal() * 0.18);
  readonly total = computed(() => this.subtotal() * 1.18);

  agregar(producto: Producto): void {
    this.items.update(lista => {
      const existente = lista.find(item => item.producto.id === producto.id);
      if (existente) {
        if (existente.cantidad < producto.stock) {
          existente.cantidad++;
        }
        return [...lista];
      }
      return [...lista, { producto, cantidad: 1 }];
    });
    this.emitirNotificacion(`"${producto.nombre}" agregado al carrito`);
  }

  quitar(productoId: number): void {
    this.items.update(lista => lista.filter(item => item.producto.id !== productoId));
  }

  cambiarCantidad(productoId: number, delta: number): void {
    this.items.update(lista =>
      lista
        .map(item => {
          if (item.producto.id !== productoId) return item;
          const nueva = item.cantidad + delta;
          if (nueva < 1) return item;
          return { ...item, cantidad: Math.min(nueva, item.producto.stock) };
        })
        .filter(item => item.cantidad >= 1)
    );
  }

  vaciar(): void {
    this.items.set([]);
  }

  private emitirNotificacion(mensaje: string): void {
    this.notificacion.set(mensaje);
    setTimeout(() => {
      if (this.notificacion() === mensaje) {
        this.notificacion.set('');
      }
    }, 2500);
  }
}
