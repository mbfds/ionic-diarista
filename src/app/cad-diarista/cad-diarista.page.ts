import { Component, OnInit } from '@angular/core';
import { DiaristaService } from '../diarista.service';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ViacepService } from '../viacep.service';
import { Http } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cad-diarista',
  templateUrl: './cad-diarista.page.html',
  styleUrls: ['./cad-diarista.page.scss'],
})
export class CadDiaristaPage implements OnInit {
  public confirma : any = { };
  public nomeFornecedor : string ;
  public cepFornecedor : string ;
  public telefoneFornecedor : string ;
  public celularFornecedor : string ;
  public experienciaFornecedor : string ;
  public header:Text;
  public subHeader:Text;
  public message:Text;
  public endereco : any = { };
  public arquivo:string;




  constructor(private DiaristaService:DiaristaService,public alertController: AlertController,private cepServico:ViacepService,private camera:Camera,private http:Http) { }
  photo: string = '';

  ngOnInit() {
  }
  
   verGaleria(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   let arquivo = 'data:image/jpeg;base64,' + imageData;
   console.log(arquivo);
  }, (err) => {
   // Handle error
  });
  }



  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   let arquivo = 'data:image/jpeg;base64,' + imageData;
   console.log(arquivo);
  }, (err) => {
   // Handle error
  });}
  
  setDiarista(){
    if(this.nomeFornecedor==null ||this.telefoneFornecedor==null||this.celularFornecedor==null ||this.cepFornecedor==null ||this.experienciaFornecedor==null  ){
      this.teste('Não foi possível cadastrar','Algum campo em branco','Preencha todos os Campos');
    }else{
    this.DiaristaService.setDiarista(this.nomeFornecedor,this.telefoneFornecedor,this.celularFornecedor,this.cepFornecedor,this.experienciaFornecedor).subscribe(
      data=>{
        const response = data as any;
        this.confirma= JSON.parse(response._body);
        console.log(this.confirma);
        if(this.confirma==1){
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
    this.cepServico.pegaCep(this.cepFornecedor).subscribe(
      data =>{
        const response = data as any;
        this.endereco= JSON.parse(response._body);
        console.log(this.endereco);
      },error=>{
        console.log("Erro ao busca: "+error);
      }
    );
  }
  upload(){
    let url="http://marceloflorentino.000webhostapp.com/diarista/index.php/upload/setImagem";
    let postData = new FormData();
    postData.append("file",this.arquivo);
    let data:Observable<any>=this.http.post(url,postData);
    data.subscribe((result)=>{
      console.log(result);
    });
  } 
}
