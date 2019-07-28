import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadDiaristaPage } from './cad-diarista.page';

const routes: Routes = [
  {
    path: '',
    component: CadDiaristaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadDiaristaPage]
})
export class CadDiaristaPageModule {}
