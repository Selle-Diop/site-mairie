import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  title = 'Mairie de Sicap Liberté';
  
  // Données pour la page d'accueil dynamique
  motDuMaire = {
    titre: 'Mot du Maire',
    contenu: 'Bienvenue sur le site officiel de la Mairie de Sicap Liberté. Notre engagement est de vous offrir des services de qualité et de maintenir un lien direct avec nos concitoyens.',
    auteur: 'Le Maire de Sicap Liberté'
  };

  dernieresActualites = [
    {
      id: 1,
      titre: 'Nouvelle infrastructure routière',
      resume: 'Lancement des travaux de réfection de la route principale',
      date: new Date('2024-01-15'),
      image: 'assets/images/route.jpg'
    },
    {
      id: 2,
      titre: 'Campagne de vaccination',
      resume: 'Organisation d\'une campagne de vaccination gratuite',
      date: new Date('2024-01-10'),
      image: 'assets/images/vaccination.jpg'
    },
    {
      id: 3,
      titre: 'Fête de la commune',
      resume: 'Célébration annuelle de notre commune le 25 janvier',
      date: new Date('2024-01-08'),
      image: 'assets/images/fete.jpg'
    }
  ];

  projetsEnCours = [
    {
      id: 1,
      nom: 'Construction du nouveau marché',
      description: 'Modernisation des infrastructures commerciales',
      progression: 75,
      dateFinPrevue: new Date('2024-06-30')
    },
    {
      id: 2,
      nom: 'Rénovation de l\'école primaire',
      description: 'Amélioration des conditions d\'apprentissage',
      progression: 45,
      dateFinPrevue: new Date('2024-09-15')
    },
    {
      id: 3,
      nom: 'Extension du réseau d\'éclairage public',
      description: 'Installation de nouveaux lampadaires LED',
      progression: 60,
      dateFinPrevue: new Date('2024-05-20')
    }
  ];

  alertesImportantes = [
    {
      id: 1,
      type: 'info',
      titre: 'Coupure d\'eau programmée',
      message: 'Coupure d\'eau prévue le 20 janvier de 8h à 16h dans le quartier Nord',
      dateExpiration: new Date('2024-01-20')
    },
    {
      id: 2,
      type: 'warning',
      titre: 'Inscriptions scolaires',
      message: 'Les inscriptions pour l\'année scolaire 2024-2025 sont ouvertes jusqu\'au 28 février',
      dateExpiration: new Date('2024-02-28')
    }
  ];

  constructor() { }
}
