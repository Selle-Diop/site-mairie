import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Mairie de Sicap Liberté';

  // Menu de navigation
  menuItems = [
    { path: '/', label: 'Accueil', exact: true },
    { path: '/presentation', label: 'Présentation', exact: false },
    { path: '/services-en-ligne', label: 'Services en ligne', exact: false },
    { path: '/annuaire-services', label: 'Annuaire', exact: false },
    { path: '/actualites', label: 'Actualités', exact: false },
    { path: '/demarches', label: 'Démarches', exact: false },
    { path: '/espace-citoyen', label: 'Espace Citoyen', exact: false },
    { path: '/transparence', label: 'Transparence', exact: false },
    { path: '/contact', label: 'Contact', exact: false }
  ];

  // État du menu mobile
  isMobileMenuOpen = false;

  constructor() { }

  // Toggle du menu mobile
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Fermer le menu mobile
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
