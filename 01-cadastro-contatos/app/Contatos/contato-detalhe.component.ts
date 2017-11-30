import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location, LocationChangeEvent } from '@angular/common';
import { ContatoService } from './contato.service';
import { Contato } from './contatos.model';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})

export class ContatoDetalheComponent implements OnInit{
    
    contato: Contato;

    constructor(
        private contatoService:ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void{
        this.contato = new Contato(0,'','','');
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];

            if(id)
            {
            this.contatoService.getContato(id)
                .then((contato: Contato) =>{
                   this.contato = contato;
                });
            }
        });
    }

    getFormGroupClass(isValid:boolean, isPristine: boolean):{}{
        return{
            'form-group':true,
            'is-invalid':!isValid && !isPristine,
            'is-valid': isValid && !isPristine
        };
    }

    getFormControlClass(isValid:boolean, isPristine: boolean):{}{
        return{
            'form-control':true,
            'is-invalid':!isValid && !isPristine,
            'is-valid': isValid && !isPristine
        };
    }

    onSubmit(): void{
        console.log(this.contato);
    }
}