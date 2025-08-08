import { Component, OnInit } from '@angular/core';

interface Demarche {
  id: string;
  titre: string;
  description: string;
  categorie: string;
  difficulte: 'facile' | 'moyenne' | 'difficile';
  duree: string;
  cout: string;
  documentsRequis: string[];
  etapes: EtapeDemarche[];
  conseils: string[];
  formulaires: string[];
  contact: {
    service: string;
    telephone: string;
    email: string;
    horaires: string;
  };
  faq: FAQ[];
  delaiTraitement: string;
  validite: string;
  renouvellement?: string;
}

interface EtapeDemarche {
  numero: number;
  titre: string;
  description: string;
  documentsNecessaires: string[];
  dureeEstimee: string;
  obligatoire: boolean;
}

interface FAQ {
  question: string;
  reponse: string;
}

interface CategorieDemarche {
  id: string;
  nom: string;
  icone: string;
  couleur: string;
  description: string;
}

@Component({
  selector: 'app-demarches',
  templateUrl: './demarches.component.html',
  styleUrls: ['./demarches.component.scss']
})
export class DemarchesComponent implements OnInit {
  
  demarches: Demarche[] = [
    {
      id: 'acte-naissance',
      titre: 'Demande d\'acte de naissance',
      description: 'Obtenir une copie intégrale ou un extrait d\'acte de naissance',
      categorie: 'etat-civil',
      difficulte: 'facile',
      duree: '15 minutes',
      cout: 'Gratuit',
      delaiTraitement: '2-5 jours ouvrés',
      validite: 'Permanente',
      documentsRequis: [
        'Pièce d\'identité du demandeur',
        'Justificatif de domicile (si demande par correspondance)',
        'Procuration (si demande pour un tiers)'
      ],
      etapes: [
        {
          numero: 1,
          titre: 'Préparation des documents',
          description: 'Rassemblez tous les documents nécessaires',
          documentsNecessaires: ['Pièce d\'identité', 'Justificatif de domicile'],
          dureeEstimee: '5 minutes',
          obligatoire: true
        },
        {
          numero: 2,
          titre: 'Remplissage du formulaire',
          description: 'Complétez le formulaire de demande d\'acte de naissance',
          documentsNecessaires: ['Formulaire CERFA n°12100*02'],
          dureeEstimee: '10 minutes',
          obligatoire: true
        },
        {
          numero: 3,
          titre: 'Dépôt de la demande',
          description: 'Déposez votre dossier en mairie ou envoyez-le par courrier',
          documentsNecessaires: [],
          dureeEstimee: '5 minutes',
          obligatoire: true
        }
      ],
      conseils: [
        'Vérifiez que votre pièce d\'identité est valide',
        'Pour une demande urgente, privilégiez le dépôt en personne',
        'Conservez votre récépissé de dépôt'
      ],
      formulaires: ['CERFA n°12100*02 - Demande d\'acte de naissance'],
      contact: {
        service: 'Service État Civil',
        telephone: '33 8 XX XX XX XX',
        email: 'etat-civil@sicap-liberte.sn',
        horaires: 'Lun-Ven: 8h-16h'
      },
      faq: [
        {
          question: 'Puis-je demander l\'acte de naissance de quelqu\'un d\'autre ?',
          reponse: 'Oui, avec une procuration signée et une copie de la pièce d\'identité de la personne concernée.'
        },
        {
          question: 'Combien coûte un acte de naissance ?',
          reponse: 'Les actes de naissance sont gratuits pour les personnes nées dans la commune.'
        }
      ]
    },
    {
      id: 'permis-construire',
      titre: 'Demande de permis de construire',
      description: 'Obtenir l\'autorisation de construire un bâtiment',
      categorie: 'urbanisme',
      difficulte: 'difficile',
      duree: '2-3 heures',
      cout: 'Variable selon projet',
      delaiTraitement: '2-3 mois',
      validite: '3 ans',
      renouvellement: 'Possible une fois',
      documentsRequis: [
        'Plan de situation du terrain',
        'Plan de masse des constructions',
        'Plan en coupe du terrain',
        'Notice descriptive',
        'Plan des façades et toitures',
        'Document graphique 3D',
        'Photographies du terrain',
        'Étude d\'impact (si nécessaire)'
      ],
      etapes: [
        {
          numero: 1,
          titre: 'Étude de faisabilité',
          description: 'Vérifiez la constructibilité du terrain et les règles d\'urbanisme',
          documentsNecessaires: ['Plan local d\'urbanisme', 'Certificat d\'urbanisme'],
          dureeEstimee: '1-2 semaines',
          obligatoire: true
        },
        {
          numero: 2,
          titre: 'Constitution du dossier',
          description: 'Rassemblez tous les documents et plans requis',
          documentsNecessaires: ['Plans architecturaux', 'Étude technique'],
          dureeEstimee: '2-4 semaines',
          obligatoire: true
        },
        {
          numero: 3,
          titre: 'Dépôt en mairie',
          description: 'Déposez votre dossier complet au service urbanisme',
          documentsNecessaires: ['Dossier complet en 4 exemplaires'],
          dureeEstimee: '1 jour',
          obligatoire: true
        },
        {
          numero: 4,
          titre: 'Instruction du dossier',
          description: 'La mairie examine votre demande et peut demander des compléments',
          documentsNecessaires: [],
          dureeEstimee: '2-3 mois',
          obligatoire: true
        }
      ],
      conseils: [
        'Consultez le Plan Local d\'Urbanisme avant de commencer',
        'Faites appel à un architecte pour les projets > 150m²',
        'Prévoyez des délais supplémentaires pour les compléments'
      ],
      formulaires: ['CERFA n°13406*07 - Demande de permis de construire'],
      contact: {
        service: 'Service Urbanisme',
        telephone: '33 8 XX XX XX XX',
        email: 'urbanisme@sicap-liberte.sn',
        horaires: 'Lun-Ven: 8h-16h'
      },
      faq: [
        {
          question: 'Quand dois-je faire appel à un architecte ?',
          reponse: 'Un architecte est obligatoire pour toute construction de plus de 150m² de surface de plancher.'
        },
        {
          question: 'Que se passe-t-il si mon dossier est incomplet ?',
          reponse: 'Vous recevrez un courrier vous demandant de compléter votre dossier dans un délai de 3 mois.'
        }
      ]
    },
    {
      id: 'carte-identite',
      titre: 'Renouvellement carte d\'identité',
      description: 'Renouveler sa carte nationale d\'identité',
      categorie: 'etat-civil',
      difficulte: 'moyenne',
      duree: '30 minutes',
      cout: '25 000 FCFA',
      delaiTraitement: '3-6 semaines',
      validite: '10 ans',
      documentsRequis: [
        'Ancienne carte d\'identité',
        'Acte de naissance (moins de 3 mois)',
        '2 photos d\'identité récentes',
        'Justificatif de domicile',
        'Timbre fiscal'
      ],
      etapes: [
        {
          numero: 1,
          titre: 'Pré-demande en ligne',
          description: 'Effectuez votre pré-demande sur le site officiel',
          documentsNecessaires: [],
          dureeEstimee: '10 minutes',
          obligatoire: false
        },
        {
          numero: 2,
          titre: 'Prise de rendez-vous',
          description: 'Prenez rendez-vous en mairie ou en préfecture',
          documentsNecessaires: [],
          dureeEstimee: '5 minutes',
          obligatoire: true
        },
        {
          numero: 3,
          titre: 'Dépôt du dossier',
          description: 'Présentez-vous au rendez-vous avec tous les documents',
          documentsNecessaires: ['Tous les documents requis'],
          dureeEstimee: '15 minutes',
          obligatoire: true
        }
      ],
      conseils: [
        'Vérifiez la validité de votre ancienne carte avant le rendez-vous',
        'Les photos doivent respecter les normes officielles',
        'Prévoyez le montant exact en espèces'
      ],
      formulaires: ['Formulaire de demande de CNI'],
      contact: {
        service: 'Service État Civil',
        telephone: '33 8 XX XX XX XX',
        email: 'etat-civil@sicap-liberte.sn',
        horaires: 'Lun-Ven: 8h-16h'
      },
      faq: [
        {
          question: 'Puis-je faire ma demande si ma carte est expirée ?',
          reponse: 'Oui, vous pouvez renouveler votre carte même après expiration.'
        },
        {
          question: 'Que faire si j\'ai perdu ma carte ?',
          reponse: 'Vous devez d\'abord faire une déclaration de perte au commissariat.'
        }
      ]
    },
    {
      id: 'certificat-residence',
      titre: 'Certificat de résidence',
      description: 'Obtenir une attestation de domicile',
      categorie: 'administratif',
      difficulte: 'facile',
      duree: '10 minutes',
      cout: '2 000 FCFA',
      delaiTraitement: '24-48 heures',
      validite: '3 mois',
      documentsRequis: [
        'Pièce d\'identité',
        'Justificatif de domicile récent',
        'Attestation du propriétaire (si locataire)'
      ],
      etapes: [
        {
          numero: 1,
          titre: 'Remplissage de la demande',
          description: 'Complétez le formulaire de demande',
          documentsNecessaires: ['Formulaire de demande'],
          dureeEstimee: '5 minutes',
          obligatoire: true
        },
        {
          numero: 2,
          titre: 'Dépôt en mairie',
          description: 'Déposez votre demande avec les pièces justificatives',
          documentsNecessaires: ['Dossier complet'],
          dureeEstimee: '5 minutes',
          obligatoire: true
        }
      ],
      conseils: [
        'Le justificatif de domicile doit dater de moins de 3 mois',
        'Vérifiez que votre nom figure sur le justificatif',
        'Gardez une copie de votre demande'
      ],
      formulaires: ['Formulaire de demande de certificat de résidence'],
      contact: {
        service: 'Service Administratif',
        telephone: '33 8 XX XX XX XX',
        email: 'admin@sicap-liberte.sn',
        horaires: 'Lun-Ven: 8h-16h'
      },
      faq: [
        {
          question: 'Quelle est la durée de validité ?',
          reponse: 'Le certificat de résidence est valable 3 mois à compter de sa délivrance.'
        }
      ]
    }
  ];

  categories: CategorieDemarche[] = [
    {
      id: 'toutes',
      nom: 'Toutes les démarches',
      icone: 'fas fa-list',
      couleur: '#2c5aa0',
      description: 'Voir toutes les démarches disponibles'
    },
    {
      id: 'etat-civil',
      nom: 'État Civil',
      icone: 'fas fa-user',
      couleur: '#27ae60',
      description: 'Actes de naissance, mariage, décès, carte d\'identité'
    },
    {
      id: 'urbanisme',
      nom: 'Urbanisme',
      icone: 'fas fa-building',
      couleur: '#e74c3c',
      description: 'Permis de construire, déclarations de travaux'
    },
    {
      id: 'administratif',
      nom: 'Administratif',
      icone: 'fas fa-file-alt',
      couleur: '#f39c12',
      description: 'Certificats, attestations, légalisations'
    },
    {
      id: 'social',
      nom: 'Social',
      icone: 'fas fa-heart',
      couleur: '#9b59b6',
      description: 'Aides sociales, allocations, accompagnement'
    }
  ];

  // Variables de filtrage et recherche
  categorieSelectionnee: string = 'toutes';
  rechercheTexte: string = '';
  difficulteSelectionnee: string = 'toutes';
  
  // Variables d'affichage
  demarcheSelectionnee: Demarche | null = null;
  etapeActive: number = 1;
  
  // Variables de tri
  triPar: string = 'titre';
  ordreDecroissant: boolean = false;
  categoriesMap = new Map<string, CategorieDemarche>();

  constructor() { }

  ngOnInit(): void {
     this.categories.forEach(c => this.categoriesMap.set(c.id, c));
  }
  getNomCategorie(categorieId: string): string {
  const categorie = this.categories.find(c => c.id === categorieId);
  return categorie?.nom || 'Autre'; // "Autre" comme valeur par défaut
}
// getNomCategorie(categorieId: string): string {
//   return this.categoriesMap.get(categorieId)?.nom || '';
// }
  // Getters pour les données filtrées
  get demarchesFiltrees(): Demarche[] {
    let resultats = this.demarches;

    // Filtrage par catégorie
    if (this.categorieSelectionnee !== 'toutes') {
      resultats = resultats.filter(d => d.categorie === this.categorieSelectionnee);
    }

    // Filtrage par difficulté
    if (this.difficulteSelectionnee !== 'toutes') {
      resultats = resultats.filter(d => d.difficulte === this.difficulteSelectionnee);
    }

    // Filtrage par recherche textuelle
    if (this.rechercheTexte.trim()) {
      const recherche = this.rechercheTexte.toLowerCase();
      resultats = resultats.filter(d => 
        d.titre.toLowerCase().includes(recherche) ||
        d.description.toLowerCase().includes(recherche) ||
        d.documentsRequis.some(doc => doc.toLowerCase().includes(recherche))
      );
    }

    // Tri
    resultats.sort((a, b) => {
      let valeurA: any, valeurB: any;
      
      switch (this.triPar) {
        case 'titre':
          valeurA = a.titre;
          valeurB = b.titre;
          break;
        case 'difficulte':
          const ordresDifficulte = { 'facile': 1, 'moyenne': 2, 'difficile': 3 };
          valeurA = ordresDifficulte[a.difficulte];
          valeurB = ordresDifficulte[b.difficulte];
          break;
        case 'duree':
          valeurA = a.duree;
          valeurB = b.duree;
          break;
        default:
          valeurA = a.titre;
          valeurB = b.titre;
      }

      if (valeurA < valeurB) return this.ordreDecroissant ? 1 : -1;
      if (valeurA > valeurB) return this.ordreDecroissant ? -1 : 1;
      return 0;
    });

    return resultats;
  }

  // Méthodes de filtrage
  changerCategorie(categorieId: string): void {
    this.categorieSelectionnee = categorieId;
  }

  changerDifficulte(difficulte: string): void {
    this.difficulteSelectionnee = difficulte;
  }

  changerTri(critere: string): void {
    if (this.triPar === critere) {
      this.ordreDecroissant = !this.ordreDecroissant;
    } else {
      this.triPar = critere;
      this.ordreDecroissant = false;
    }
  }

  // Méthodes d'affichage
  selectionnerDemarche(demarche: Demarche): void {
    this.demarcheSelectionnee = demarche;
    this.etapeActive = 1;
  }

  fermerDetails(): void {
    this.demarcheSelectionnee = null;
    this.etapeActive = 1;
  }

  changerEtape(numeroEtape: number): void {
    this.etapeActive = numeroEtape;
  }

  // Méthodes utilitaires
  getCouleurCategorie(categorieId: string): string {
    const categorie = this.categories.find(c => c.id === categorieId);
    return categorie ? categorie.couleur : '#2c5aa0';
  }

  getIconeCategorie(categorieId: string): string {
    const categorie = this.categories.find(c => c.id === categorieId);
    return categorie ? categorie.icone : 'fas fa-file';
  }

  getDifficulteLabel(difficulte: string): string {
    const labels: { [key: string]: string } = {
      'facile': 'Facile',
      'moyenne': 'Moyenne',
      'difficile': 'Difficile'
    };
    return labels[difficulte] || difficulte;
  }

  getDifficulteCouleur(difficulte: string): string {
    const couleurs: { [key: string]: string } = {
      'facile': '#27ae60',
      'moyenne': '#f39c12',
      'difficile': '#e74c3c'
    };
    return couleurs[difficulte] || '#2c5aa0';
  }

  telechargerFormulaire(formulaire: string): void {
    // Simulation du téléchargement
    console.log(`Téléchargement du formulaire: ${formulaire}`);
    // Ici, vous implémenteriez la logique de téléchargement réelle
  }

  contacterService(contact: any): void {
    // Simulation du contact
    console.log(`Contact du service: ${contact.service}`);
    // Ici, vous pourriez ouvrir une modal de contact ou rediriger vers une page de contact
  }

  resetFiltres(): void {
    this.categorieSelectionnee = 'toutes';
    this.difficulteSelectionnee = 'toutes';
    this.rechercheTexte = '';
    this.triPar = 'titre';
    this.ordreDecroissant = false;
  }
}
