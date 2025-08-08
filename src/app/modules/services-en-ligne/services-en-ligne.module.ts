import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ServicesEnLigneComponent } from './services-en-ligne.component';
// import { ServicesEnLigneComponent } from './services-en-ligne.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesEnLigneComponent
  }
];

@NgModule({
  declarations: [
    ServicesEnLigneComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesEnLigneModule { }
