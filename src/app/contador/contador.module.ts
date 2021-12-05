import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/Contador.component';

@NgModule({

    declarations:[
        ContadorComponent
    ],
    exports:[

        ContadorComponent
    ]
})

export class ContadorModule {

}