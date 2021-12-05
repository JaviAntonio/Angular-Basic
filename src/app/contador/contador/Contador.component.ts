import { Component } from '@angular/core';

@Component({

    selector: 'app-contador',
    template: `
            <h1>{{titulo}}</h1>

<h2>La base es: <strong> {{base}} </strong> </h2>

<button (click)="Acumular(base)">+{{base}}</button>
<span> {{numero}} </span>
<button (click)="Acumular(-base)">-{{base}}</button>
    
    `    
})

export class ContadorComponent {
    titulo: string = 'App Contador';
    base : number = 5;
    numero: number = 20;
  
  Acumular(valor: number){
  
    this.numero += valor;
  }
  }