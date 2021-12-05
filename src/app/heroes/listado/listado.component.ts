import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  Heroes : string[]=  ['Thor','Hulk','Spiderman','Falcon','Antman'];

  heroeBorrado: string ='';

  borrarHeroe(){

     this.heroeBorrado = this.Heroes.shift() ||'';  
  }
  
}

