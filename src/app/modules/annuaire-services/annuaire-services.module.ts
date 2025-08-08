import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AnnuaireServicesComponent } from './annuaire-services.component';

const routes: Routes = [
  {
    path: '',
    component: AnnuaireServicesComponent
  }
];

@NgModule({
  declarations: [
    AnnuaireServicesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AnnuaireServicesModule { }
