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

  buscarPersonaje() {  //Explicacion abajo
    if (this.nombrePersonaje.trim().length > 0) {

      this.router.navigate([''], {
        queryParams: { search: this.nombrePersonaje }, // la palabra search es inventada por mi pero tiene que ser la misma que recoja en homeComponent
        queryParamsHandling: 'merge', // Mantener otros parámetros existentes en la URL. Si ya había otros parámetros en la URL, esto asegura que no se sobrescriban, sino que se añadan o actualicen.
      });

      this.nombrePersonaje = ''; //Vacia el buscador
    }
  }
}

/* ------------------------------------------------------------------------------
/// 1- Se manda el parámetro desde el componente Buscador ///
queryParams: Es un objeto donde defines los parámetros que deseas añadir a la URL. En este caso, { search: this.nombrePersonaje } significa 
que estás añadiendo un parámetro llamado search con el valor del nombre del personaje ingresado. Por ejemplo: http://localhost:4200/?search=Spider-Man

Entonces, el parámetro search viaja en la URL como parte de la query string

+ ¡Importante saber!: 
Al usar router.navigate con la opción queryParams, Angular construye automáticamente la URL añadiendo o actualizando los parámetros de consulta (query string) por ti.

Ejemplo: si busco por batman
this.router.navigate([''], {
  queryParams: { search: 'batman' },
});

la url que se construye es: http://localhost:4200/?search=batmann

+ ¡Importante saber!:
En queryParams, lo que se puede pasar son valores serializables, ya que los parámetros de consulta (query parameters) se añaden a la URL como texto. Esto significa que puedes pasar:
string, number, boolean, arrays (Ejemplo: ?categories=hero,villain)

PD: No se pueden pasar objetos como tal pero se puede convertir el objeto en una cadena con JSON.stringify y pasarlo como un parámetro.
QUedaria una url asi http://localhost:4200/detail?hero={"id":"1","name":"Spider-Man","power":"Agility"}


/// 2- Se recoge el parámetro en el componente Home ///
En HomeComponent, se usa el ActivatedRoute para suscribirte a los cambios en los queryParams de la URL. 
Esto te permite reaccionar cuando un nuevo parámetro search es detectado en la URL.

Cambios como añadir un texto una busqueda o modificar la biusqueda 
------------------------------------------------------------------------------
*/
