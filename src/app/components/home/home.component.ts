import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ISuperhero } from 'src/app/models/ISuperhero.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ListaHeroes: ISuperhero[] = []; // guardo los heroes
  private listaOriginal: ISuperhero[] = []; //lista creada para restaurar la list del cargarHeroes() del OnInit si no hay filtros de busqueda

  constructor(private restService: RestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarHeroes();

    // Captura el parámetro 'search' y realiza la búsqueda (desde buscador component)
    // Captura el parámetro 'genre' y realiza el filtro (desde filtro component)
    this.route.queryParams.subscribe(params => {
      const nombre = params['search']; // Obtiene el valor del parámetro 'search'
      const genero = params['genre']; // Filtro por género. esto sera "" o Male o Female que son los values del option de filtroComponent.html
      if (nombre) {
        this.buscarHeroes(nombre); // Aplicar búsqueda
      } else if (genero) {
        this.filtrarPorGenero(genero); // Aplicar filtro
      } else {
        this.ListaHeroes = [...this.listaOriginal]; // Restaurar lista completa si no hay filtros ni búsqueda
      }
    });
  }


  // peticion para traer la lista de heroes
  public cargarHeroes(): void{
    const peticiones = []; //array vacío donde se guardarán todas las peticiones HTTP

    // Crear un array con las peticiones
    for (let index = 1; index <= 50; index++) {
      peticiones.push(this.restService.getHero(index.toString())); //guardo los observables (aun no me he suscrito). Los obserbables son Lazy
    }//En peticiones se guardan los observables retornados por getHero, pero las peticiones HTTP no se han ejecutado todavía.
   

    forkJoin(peticiones).subscribe((resultados) => { //forkJoin es de RxJS - Espera a que todos los observables (todas las peticiones HTTP) se completen
      this.ListaHeroes = resultados;
      console.log(this.ListaHeroes)

    // Guardar la lista completa en listaOriginal (para el filtro). Crea una nueva copia independiente
    this.listaOriginal = [...this.ListaHeroes];

    // Ordenar por ID (convertir a número para asegurar orden correcto porque las respuestas no necesariamente llegan en el mismo orden)
    this.ListaHeroes.sort((a, b) => Number(a.id) - Number(b.id));
    });
  }


  //evento del boton de detalle que sube de cardComponent para que redirija a una url
  onHeroSelected(hero: ISuperhero) : void {  //<app-card [hero] = hero (heroSelected)="onHeroSelected($event)"></app-card>
    this.router.navigate(['/detail', hero.id]); // lleva a http://localhost:4200/detail/71
  }


  //BUSQUEDA del heroe con el parametro que viene en params de buscadorComponent y que guardamos en "nombre" en el OnInit
  private buscarHeroes(nombre: string): void {
    this.restService.searchByName(nombre).subscribe({
      next: (data) => {
        this.ListaHeroes = data.results || [];  //Se guarda esa busqueda en ListaHeroes (tb usamos esta variable apra guardar el getAll)
      },
      error: (err) => {
        console.error('Error en la búsqueda:', err);
        this.ListaHeroes = [];
      }
    });
  }

  //FILTRO
  public filtrarPorGenero(genero: string): void { // Filtro por género. esto sera "" o Male o Female que son los values del option de filtroComponent.html
    this.ListaHeroes = this.listaOriginal.filter(
      (hero: ISuperhero) =>
        hero.appearance.gender &&                                       // Verifica que la propiedad "gender" exista y no sea null/undefined
        hero.appearance.gender.toLowerCase() === genero.toLowerCase()   // Compara el género del héroe de la lista con el argumento "genero" que se pasa por parametro
    );
  }
}
