import { Component, OnInit } from '@angular/core';
import { DiaristaService } from '../diarista.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list-diarista',
  templateUrl: './list-diarista.page.html',
  styleUrls: ['./list-diarista.page.scss'],
})
export class ListDiaristaPage implements OnInit {
 public lista_diarista = new Array<any>();
  constructor(private DiaristaService:DiaristaService, private http:Http) { }

  ngOnInit() {
  	this.mostraTudoDiarista();
  }
  mostraTudoDiarista(){
    this.DiaristaService.getDiarista().subscribe(
    data => {
      const response=data as any;
      const objeto_retorno=JSON.parse(response._body);
      this.lista_diarista=objeto_retorno;
      console.log(objeto_retorno);
    },error=>{
      console.log("erro Aqui: "+error);
    }
  );
 }
}
