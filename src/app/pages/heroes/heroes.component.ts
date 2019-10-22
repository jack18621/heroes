import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:HeroeModel[]=[];
  cargando=false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.cargando=true;
    this.heroesService.getHeroes().subscribe(resp=> {
      this.heroes=resp
      this.cargando=false;
    })
  }

  borrarHeroe(heroe:HeroeModel, indx:number){

    Swal.fire({
      title:`¿Esta seguro que desea utilizar las piedras delm infinito para eliminar a ${heroe.nombre}?`,
      type:'question',
      showConfirmButton:true,
      showCancelButton:true
    }).then(resp=>{
      if(resp.value){
        
            this.heroes.splice(indx, 1);
            this.heroesService.borrarHeroe(heroe.id).subscribe();

      }
    })

  }

}
