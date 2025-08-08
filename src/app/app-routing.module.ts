import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/accueil/accueil.module').then(m => m.AccueilModule)
  },
  {
    path: 'presentation',
    loadChildren: () => import('./modules/presentation/presentation.module').then(m => m.PresentationModule)
  },
  {
    path: 'services-en-ligne',
    loadChildren: () => import('./modules/services-en-ligne/services-en-ligne.module').then(m => m.ServicesEnLigneModule)
  },
  {
    path: 'annuaire-services',
    loadChildren: () => import('./modules/annuaire-services/annuaire-services.module').then(m => m.AnnuaireServicesModule)
  },
  {
    path: 'actualites',
    loadChildren: () => import('./modules/actualites/actualites.module').then(m => m.ActualitesModule)
   },
  {
    path: 'demarches',
    loadChildren: () => import('./modules/demarches/demarches.module').then(m => m.DemarchesModule)
  },
  {
    path: 'espace-citoyen',
    loadChildren: () => import('./modules/espace-citoyen/espace-citoyen.module').then(m => m.EspaceCitoyenModule)
  },
  {
    path: 'transparence',
    loadChildren: () => import('./modules/transparence-budget/transparence-budget.module').then(m => m.TransparenceBudgetModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
