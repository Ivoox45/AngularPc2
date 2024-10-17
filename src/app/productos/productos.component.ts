import { Component } from '@angular/core';
// @ts-ignore
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  productos: { nombre: string; precio: number; descripcion: string }[] = [
    { nombre: 'manzana', precio: 1.5, descripcion: 'Una manzana fresca' },
    { nombre: 'naranja', precio: 2.0, descripcion: 'Naranja jugosa' },
  ];

  nuevoProducto = { nombre: '', precio: 0, descripcion: '' };

  agregarProducto() {
    if (this.nuevoProducto.nombre && this.nuevoProducto.precio > 0) {
      this.productos.push({ ...this.nuevoProducto });
      this.nuevoProducto = { nombre: '', precio: 0, descripcion: '' }; 

      this.lanzarConfeti();
    }
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }

  lanzarConfeti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}
