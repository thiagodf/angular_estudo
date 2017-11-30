import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-rounting.module';
import { ContatosModule } from './Contatos/contatos.module';

@NgModule({
    imports: [
        BrowserModule,
        ContatosModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}