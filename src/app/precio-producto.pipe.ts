import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioProducto',
})
export class PrecioProductoPipe implements PipeTransform {
  transform(producto: { nombre: string; precio: number }): string {
    const nombreCapitalizado =
      producto.nombre.charAt(0).toUpperCase() + producto.nombre.slice(1);
    return `${nombreCapitalizado} - S/ ${producto.precio.toFixed(2)}`;
  }
}
