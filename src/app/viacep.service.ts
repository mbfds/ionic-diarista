import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private http : Http) {}
  pegaCep( cep : string ){
    console.log ("Valor do cep Recebido" + cep );
    return this.http.get("http://viacep.com.br/ws/"+cep+"/json/");
  }
}
