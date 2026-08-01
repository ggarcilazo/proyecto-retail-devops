import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CarritoService } from './carrito.service';

interface PagoResponse {
  estado: string;
  idTransaccion: string;
  clienteId: number;
  monto: number;
  mensaje: string;
  timestamp: string;
}

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  private carrito = inject(CarritoService);
  private http = inject(HttpClient);
  private router = inject(Router);

  readonly items = this.carrito.itemsCarrito;
  readonly subtotal = this.carrito.subtotal;
  readonly igv = this.carrito.igv;
  readonly total = this.carrito.total;

  procesando = false;
  resultado: PagoResponse | null = null;
  error = '';
  private apiUrl = 'http://localhost:8080/api/pagos/procesar';

  ngOnInit(): void {
    if (this.total() <= 0) {
      this.router.navigate(['/']);
    }
  }

  confirmarPago(): void {
    if (this.procesando) return;
    this.procesando = true;
    this.error = '';
    this.resultado = null;

    const body = {
      clienteId: 12345,
      monto: Number(this.total().toFixed(2))
    };

    this.http.post<PagoResponse>(this.apiUrl, body).subscribe({
      next: (resp) => {
        this.resultado = resp;
        this.procesando = false;
        if (resp.estado === 'APROBADO') {
          this.carrito.vaciar();
        }
      },
      error: () => {
        this.error = 'No se pudo contactar con el servidor de pagos. Verifica que el backend esté activo en el puerto 8080.';
        this.procesando = false;
      }
    });
  }
}
