import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DiaristaService {
  private caminho: string="http://marceloflorentino.000webhostapp.com/diarista/index.php/";
  private diarista: string="fornecedor/getFornecedor";
  private cliente: string="cliente/getCliente";
  private diaristas: string="fornecedor/setFornecedor";
  private clientes: string="cliente/setCliente";

  

  constructor(public http:Http) { }
  getCliente(){
    return this.http.get(this.caminho+this.cliente);
  }
  getDiarista(){
    return this.http.get(this.caminho+this.diarista);
  }
  setDiarista(nomeFornecedor : string ,telefoneFornecedor:string,celularFornecedor:string,cepFornecedor:string,experienciaFornecedor:string){
    return this.http.get(this.caminho+this.diaristas+"/"+nomeFornecedor+"/"+telefoneFornecedor+"/"+celularFornecedor+"/"+cepFornecedor+"/"+experienciaFornecedor);
  }
  setCliente(nomeCliente : string ,telefoneCliente:string,celularCliente:string,cepCliente:string,numCasaCliente:string){
    return this.http.get(this.caminho+this.clientes+"/"+nomeCliente+"/"+telefoneCliente+"/"+celularCliente+"/"+cepCliente+"/"+numCasaCliente);
  }
}
