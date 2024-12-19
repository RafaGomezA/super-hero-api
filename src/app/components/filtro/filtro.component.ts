import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  filtrarPorGenero(event: Event): void {
    const genero = (event.target as HTMLSelectElement).value; // Obtener el valor del <select>
  
    if (genero === "") {
      // Si seleccionas "Todos", eliminar el parámetro `genre` de la url para que sea http://localhost:4200/
      this.router.navigate([""], {
        queryParams: {}, // Limpiar los parámetros
      });
    } else {
      // Si seleccionas un género específico, actualizar el parámetro `genre`. Será http://localhost:4200/?genre=...
      this.router.navigate([""], {
        queryParams: { genre: genero },
      });
    }
  }

}
