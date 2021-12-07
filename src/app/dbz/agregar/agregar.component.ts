import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent{

  @Input() personajes : personaje [] = [];
  
  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private DbzService: DbzService){

}
 // @Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();

  agregar(){
    if (this.nuevo.nombre.trim().length=== 0) {
      return
      
    }
//   this.onNuevoPersonaje.emit(this.nuevo);
  this.DbzService.agregarPersonaje(this.nuevo)    

    console.log(this.nuevo); 
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    console.log(this.personajes);
    
  }
}
