import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PresentationComponent } from './presentation.component';
// import { PresentationComponent } from './presentation.component';

const routes: Routes = [
  {
    path: '',
    component: PresentationComponent
  }
];

@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PresentationModule { }
