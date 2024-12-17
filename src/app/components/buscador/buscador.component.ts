import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public nombrePersonaje :string = "";

  constructor(private router: Router, private restService: RestService) { }

  ngOnInit(): void {
  }

  buscarPersonaje() {
    if (this.nombrePersonaje.trim().length > 0) {

      this.router.navigate([''], {
        queryParams: { search: this.nombrePersonaje }, 
        queryParamsHandling: 'merge', // Mantener otros parámetros existentes en la URL
      });

      this.nombrePersonaje = ''; //Vacia el buscador


    }
    this.nombrePersonaje = "";
  }
}
