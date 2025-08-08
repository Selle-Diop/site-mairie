import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AccueilComponent } from './accueil.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  }
];

@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AccueilModule { }
