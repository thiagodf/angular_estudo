import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoListaComponent } from './contatos-lista.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoService } from './contato.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations: [
        ContatoListaComponent,
        ContatoDetalheComponent
    ],
    exports:[
        ContatoListaComponent
    ],
    providers:[
        ContatoService
    ]
    
})

export class ContatosModule{}