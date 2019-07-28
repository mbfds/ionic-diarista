import { Component, OnInit } from '@angular/core';
import { DiaristaService } from '../diarista.service';
import { AlertController } from '@ionic/angular';
import { ViacepService } from '../viacep.service';


@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.page.html',
  styleUrls: ['./cad-cliente.page.scss'],
})
export class CadClientePage implements OnInit {
  private nomeCliente : string;
  private telefoneCliente : string;
  private celularCliente : string;
  private cepCliente : string;
  private numCasaCliente : string;
  private confirma : string;
  public endereco : any = { };

  constructor(private DiaristaService:DiaristaService,public alertController: AlertController,private cepServico:ViacepService) { }

  ngOnInit() {
  }
  
  setCliente(){
    if(this.nomeCliente==null ||this.telefoneCliente==null||this.celularCliente==null ||this.cepCliente==null ||this.numCasaCliente==null  ){
      this.teste('Não foi possível cadastrar','Algum campo em branco','Preencha todos os Campos');
    }else{
    this.DiaristaService.setCliente(this.nomeCliente,this.telefoneCliente,this.celularCliente,this.cepCliente,this.numCasaCliente).subscribe(
      data=>{
        const response = data as any;
        this.confirma= JSON.parse(response._body);
        console.log(this.confirma);
        if(this.confirma=='1'){
          console.log('gravou');
          this.teste('Parabéns!','Cadastro Realizado Sucesso','<br>Siga as dicas no email para completar seu cadastro');
        }else{
          console.log('Não foi possível cadastrar','Algum erro ao lado do servidor','Nós desculpe tente mais tarde!');

        }


      },error=>{
        console.log("Erro ao busca: "+error);
      }

    );}
  }
  async teste(cabecalho,subcabecalho,mensagem) {
    const alert = await this.alertController.create({
      header: cabecalho,
      subHeader: subcabecalho,
      message: mensagem ,
      buttons: ['OK']
    });

    await alert.present();
  }
  listaCep(){
    this.cepServico.pegaCep(this.cepCliente).subscribe(
      data =>{
        const response = data as any;
        this.endereco= JSON.parse(response._body);
        console.log(this.endereco);
      },error=>{
        console.log("Erro ao busca: "+error);
      }
    );
  }
}

