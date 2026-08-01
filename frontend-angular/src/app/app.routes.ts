import { Routes } from '@angular/router';
import { TiendaComponent } from './tienda.component';
import { CarritoComponent } from './carrito.component';
import { PagoComponent } from './pago.component';

export const routes: Routes = [
  { path: '', component: TiendaComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'pago', component: PagoComponent },
  { path: '**', redirectTo: '' }
];
