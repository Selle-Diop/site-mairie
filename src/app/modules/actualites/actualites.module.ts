import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ActualitesComponent } from './actualites.component';

const routes: Routes = [
  {
    path: '',
    component: ActualitesComponent
  }
];

@NgModule({
  declarations: [
    ActualitesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ActualitesModule { }
