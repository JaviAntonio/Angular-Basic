import { Component, Input } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'

})
export class PersonajesComponent {

/* @Input() personajes : personaje [] = []; */

get personajes(){
  return this.DbzService.personajes;
}

constructor (private DbzService: DbzService){

}

}
