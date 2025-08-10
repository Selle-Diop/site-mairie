import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { ContentManagementComponent } from './components/content-management/content-management.component';
import { ServicesManagementComponent } from './components/services-management/services-management.component';
import { CitizenRequestsComponent } from './components/citizen-requests/citizen-requests.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersManagementComponent,
    ContentManagementComponent,
    ServicesManagementComponent,
    CitizenRequestsComponent,
    SettingsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers: [
    DecimalPipe,
    DatePipe
  ]
})
export class AdminModule { }
