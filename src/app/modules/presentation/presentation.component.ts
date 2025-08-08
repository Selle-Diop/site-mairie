import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  
  // Histoire de la commune
  histoire = {
    titre: 'Histoire de Sicap Liberté',
    contenu: `Sicap Liberté est un quartier emblématique de Dakar qui a vu le jour dans les années 1960 dans le cadre du programme de développement urbain du Sénégal. 
              Le nom "Sicap" provient de la Société Immobilière du Cap-Vert, qui était chargée de la construction de logements sociaux.
              
              Au fil des décennies, Sicap Liberté s'est développé pour devenir un quartier résidentiel dynamique, alliant tradition et modernité. 
              La commune a été créée pour répondre aux besoins croissants de la population et offrir des services de proximité de qualité.`,
    dateCreation: '1965',
    superficie: '2.5 km²',
    population: '15 000 habitants'
  };

  // Organisation administrative
  organisationAdmin = {
    maire: {
      nom: 'Souleymane Camara',
      mandat: '2022-2027',
      photo: 'assets/images/maire-portrait.jpg'
    },
    conseilMunicipal: {
      nombreConseillers: 25,
      partis: [
        { nom: 'Parti Majoritaire', sieges: 15 },
        { nom: 'Opposition 1', sieges: 7 },
        { nom: 'Opposition 2', sieges: 3 }
      ]
    },
    services: [
      {
        nom: 'Direction Générale',
        responsable: 'M. Ousmane DIOP',
        description: 'Coordination générale des services municipaux'
      },
      {
        nom: 'Service de l\'État Civil',
        responsable: 'Mme Fatou NDIAYE',
        description: 'Gestion des actes d\'état civil et documents administratifs'
      },
      {
        nom: 'Service Technique',
        responsable: 'M. Ibrahima SARR',
        description: 'Voirie, éclairage public, espaces verts'
      },
      {
        nom: 'Service Social',
        responsable: 'Mme Aïssatou BA',
        description: 'Aide sociale, accompagnement des familles'
      },
      {
        nom: 'Service Financier',
        responsable: 'M. Cheikh FALL',
        description: 'Gestion budgétaire et comptabilité'
      }
    ]
  };

  // Données géographiques
  geographie = {
    coordonnees: {
      latitude: 14.7167,
      longitude: -17.4677
    },
    limites: [
      'Nord: Quartier Mermoz',
      'Sud: Quartier Sacré-Cœur',
      'Est: Avenue Cheikh Anta Diop',
      'Ouest: Corniche Ouest'
    ],
    quartiers: [
      'Sicap Liberté 1',
      'Sicap Liberté 2', 
      'Sicap Liberté 3',
      'Sicap Liberté 4',
      'Sicap Liberté 5',
      'Sicap Liberté 6'
    ]
  };

  // Infrastructures et équipements
  infrastructures = [
    {
      categorie: 'Éducation',
      equipements: [
        'École élémentaire Sicap Liberté A',
        'École élémentaire Sicap Liberté B',
        'Collège d\'Enseignement Moyen',
        'Lycée Technique'
      ]
    },
    {
      categorie: 'Santé',
      equipements: [
        'Centre de Santé Principal',
        'Poste de Santé Liberté 2',
        'Pharmacies (5)',
        'Cabinet médical privé'
      ]
    },
    {
      categorie: 'Sport et Loisirs',
      equipements: [
        'Terrain de football municipal',
        'Terrain de basketball',
        'Espace de jeux pour enfants',
        'Centre culturel'
      ]
    },
    {
      categorie: 'Commerce',
      equipements: [
        'Marché central',
        'Centres commerciaux (3)',
        'Boutiques de proximité',
        'Station-service'
      ]
    }
  ];

  // Projets de développement
  projetsDevloppement = [
    {
      nom: 'Modernisation du marché central',
      budget: '500 millions FCFA',
      duree: '18 mois',
      statut: 'En cours',
      description: 'Rénovation complète avec amélioration de l\'hygiène et des conditions de vente'
    },
    {
      nom: 'Extension du réseau d\'assainissement',
      budget: '800 millions FCFA',
      duree: '24 mois',
      statut: 'Planifié',
      description: 'Amélioration du système d\'évacuation des eaux usées'
    },
    {
      nom: 'Création d\'un parc urbain',
      budget: '300 millions FCFA',
      duree: '12 mois',
      statut: 'Étude',
      description: 'Espace vert de 2 hectares avec aires de jeux et pistes de jogging'
    }
  ];

  constructor() { }

  // Méthode pour afficher la carte (à implémenter avec une API de cartographie)
  afficherCarte() {
    // Logique pour afficher une carte interactive
    console.log('Affichage de la carte de Sicap Liberté');
  }
}
