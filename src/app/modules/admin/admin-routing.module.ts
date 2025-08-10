import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { ContentManagementComponent } from './components/content-management/content-management.component';
import { ServicesManagementComponent } from './components/services-management/services-management.component';
import { CitizenRequestsComponent } from './components/citizen-requests/citizen-requests.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersManagementComponent },
      { path: 'content', component: ContentManagementComponent },
      { path: 'services', component: ServicesManagementComponent },
      { path: 'requests', component: CitizenRequestsComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
