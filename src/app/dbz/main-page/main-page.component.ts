import { Component } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


 nuevo : personaje ={
   nombre: 'jefe',
   poder:  2000
 }
 
 constructor (){

 }

}

