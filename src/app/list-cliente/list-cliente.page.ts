import { Component, OnInit } from '@angular/core';
import { DiaristaService } from '../diarista.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.page.html',
  styleUrls: ['./list-cliente.page.scss'],
})
export class ListClientePage implements OnInit {
  public lista_clientes = new Array<any>();

  constructor( public http :Http,private DiaristaService:DiaristaService) { }

  ngOnInit() {
  this.mostraTudoCliente();
   
  }
  mostraTudoCliente(){
    this.DiaristaService.getCliente().subscribe(
    data => {
      const response=data as any;
      const objeto_retorno=JSON.parse(response._body);
      this.lista_clientes=objeto_retorno;
      console.log(objeto_retorno);
    },error=>{
      console.log("erro Aqui: "+error);
    }
  );
 } 

}
