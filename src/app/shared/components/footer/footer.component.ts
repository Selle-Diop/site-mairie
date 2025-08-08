import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  // Informations de contact
  contactInfo = {
    adresse: 'Avenue de la République',
    ville: 'Sicap Liberté, Dakar',
    pays: 'Sénégal',
    telephone: '+221 33 XXX XX XX',
    email: 'contact@mairie-sicapliberte.sn',
    horaires: 'Lun-Ven 8h-17h'
  };

  // Liens rapides
  liensRapides = [
    { label: 'Accueil', path: '/' },
    { label: 'Services en ligne', path: '/services-en-ligne' },
    { label: 'Actualités', path: '/actualites' },
    { label: 'Contact', path: '/contact' }
  ];

  // Liens utiles
  liensUtiles = [
    { label: 'Démarches administratives', path: '/demarches' },
    { label: 'Espace Citoyen', path: '/espace-citoyen' },
    { label: 'Transparence', path: '/transparence' },
    { label: 'Plan du site', path: '/plan-site' }
  ];

  // Réseaux sociaux
  reseauxSociaux = [
    { nom: 'Facebook', icon: 'fab fa-facebook', url: '#' },
    { nom: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { nom: 'Instagram', icon: 'fab fa-instagram', url: '#' },
    { nom: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' }
  ];

  // Année courante
  currentYear = new Date().getFullYear();

  constructor() { }

  // Ouvrir un lien externe
  ouvrirLienExterne(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
