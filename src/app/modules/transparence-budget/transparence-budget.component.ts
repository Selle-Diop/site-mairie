import { Component, OnInit } from '@angular/core';

interface ProjetFinance {
  id: string;
  titre: string;
  description: string;
  categorie: string;
  budget: number;
  budgetUtilise: number;
  statut: 'planifie' | 'en_cours' | 'termine' | 'suspendu';
  dateDebut: Date;
  dateFin: Date;
  responsable: string;
  beneficiaires: string;
  objectifs: string[];
  indicateurs: IndicateurProjet[];
  documents: DocumentProjet[];
  photos?: string[];
}

interface IndicateurProjet {
  nom: string;
  valeurCible: number;
  valeurActuelle: number;
  unite: string;
}

interface DocumentProjet {
  nom: string;
  type: string;
  url: string;
  datePublication: Date;
}

interface BudgetParticipatiif {
  id: string;
  titre: string;
  description: string;
  budgetTotal: number;
  budgetUtilise: number;
  nombreProjets: number;
  nombreVotants: number;
  dateOuverture: Date;
  dateFermeture: Date;
  statut: 'ouvert' | 'ferme' | 'en_cours_realisation';
  projetsSelectionnes: ProjetParticipatif[];
}

interface ProjetParticipatif {
  id: string;
  titre: string;
  description: string;
  budget: number;
  votes: number;
  quartier: string;
  categorie: string;
  selectionne: boolean;
}

interface AppelOffre {
  id: string;
  titre: string;
  description: string;
  montant: number;
  datePublication: Date;
  dateLimite: Date;
  statut: 'ouvert' | 'ferme' | 'attribue';
  criteres: string[];
  documents: DocumentProjet[];
  attributaire?: string;
  montantAttribue?: number;
}

interface DonneeFinanciere {
  annee: number;
  recettes: RecettesBudget;
  depenses: DepensesBudget;
  dette: number;
  investissements: number;
  fonctionnement: number;
}

interface RecettesBudget {
  impots: number;
  dotations: number;
  subventions: number;
  autres: number;
  total: number;
}

interface DepensesBudget {
  personnel: number;
  investissement: number;
  fonctionnement: number;
  dette: number;
  autres: number;
  total: number;
}

@Component({
  selector: 'app-transparence-budget',
  templateUrl: './transparence-budget.component.html',
  styleUrls: ['./transparence-budget.component.scss']
})
export class TransparenceBudgetComponent implements OnInit {
 public Math = Math;
  projetsFinances: ProjetFinance[] = [
    {
      id: '1',
      titre: 'Rénovation du marché central',
      description: 'Modernisation complète du marché central avec amélioration des infrastructures, création de nouveaux espaces de vente et mise aux normes sanitaires.',
      categorie: 'Infrastructure',
      budget: 450000000,
      budgetUtilise: 320000000,
      statut: 'en_cours',
      dateDebut: new Date('2024-01-15'),
      dateFin: new Date('2024-12-31'),
      responsable: 'Direction des Travaux Publics',
      beneficiaires: 'Commerçants et population de Sicap Liberté',
      objectifs: [
        'Améliorer les conditions de vente des commerçants',
        'Moderniser les infrastructures du marché',
        'Respecter les normes sanitaires',
        'Créer 50 nouveaux emplacements de vente'
      ],
      indicateurs: [
        { nom: 'Emplacements rénovés', valeurCible: 200, valeurActuelle: 140, unite: 'unités' },
        { nom: 'Nouveaux emplacements', valeurCible: 50, valeurActuelle: 30, unite: 'unités' },
        { nom: 'Taux de satisfaction', valeurCible: 85, valeurActuelle: 78, unite: '%' }
      ],
      documents: [
        { nom: 'Cahier des charges', type: 'PDF', url: '/docs/marche-cahier-charges.pdf', datePublication: new Date('2023-12-01') },
        { nom: 'Plan architectural', type: 'PDF', url: '/docs/marche-plans.pdf', datePublication: new Date('2023-12-15') },
        { nom: 'Rapport d\'avancement T1', type: 'PDF', url: '/docs/marche-rapport-t1.pdf', datePublication: new Date('2024-03-31') }
      ],
      photos: ['/assets/images/marche-avant.jpg', '/assets/images/marche-travaux.jpg']
    },
    {
      id: '2',
      titre: 'Construction d\'un centre de santé',
      description: 'Édification d\'un centre de santé moderne équipé pour améliorer l\'accès aux soins de santé primaires dans la commune.',
      categorie: 'Santé',
      budget: 280000000,
      budgetUtilise: 280000000,
      statut: 'termine',
      dateDebut: new Date('2023-03-01'),
      dateFin: new Date('2023-11-30'),
      responsable: 'Direction de la Santé',
      beneficiaires: 'Population de Sicap Liberté (15 000 habitants)',
      objectifs: [
        'Améliorer l\'accès aux soins de santé primaires',
        'Réduire la mortalité infantile',
        'Former le personnel médical local',
        'Équiper le centre avec du matériel moderne'
      ],
      indicateurs: [
        { nom: 'Consultations mensuelles', valeurCible: 1200, valeurActuelle: 1350, unite: 'consultations' },
        { nom: 'Personnel formé', valeurCible: 15, valeurActuelle: 18, unite: 'personnes' },
        { nom: 'Taux de satisfaction', valeurCible: 90, valeurActuelle: 94, unite: '%' }
      ],
      documents: [
        { nom: 'Rapport de réalisation', type: 'PDF', url: '/docs/centre-sante-rapport.pdf', datePublication: new Date('2023-12-15') },
        { nom: 'Bilan financier', type: 'PDF', url: '/docs/centre-sante-bilan.pdf', datePublication: new Date('2023-12-20') }
      ],
      photos: ['/assets/images/centre-sante-1.jpg', '/assets/images/centre-sante-2.jpg']
    },
    {
      id: '3',
      titre: 'Aménagement d\'espaces verts',
      description: 'Création de parcs et jardins publics pour améliorer le cadre de vie et offrir des espaces de détente aux habitants.',
      categorie: 'Environnement',
      budget: 120000000,
      budgetUtilise: 45000000,
      statut: 'planifie',
      dateDebut: new Date('2024-06-01'),
      dateFin: new Date('2024-12-31'),
      responsable: 'Service Espaces Verts',
      beneficiaires: 'Familles et enfants de la commune',
      objectifs: [
        'Créer 3 parcs publics',
        'Planter 500 arbres',
        'Installer des aires de jeux pour enfants',
        'Améliorer la qualité de l\'air'
      ],
      indicateurs: [
        { nom: 'Parcs créés', valeurCible: 3, valeurActuelle: 0, unite: 'parcs' },
        { nom: 'Arbres plantés', valeurCible: 500, valeurActuelle: 0, unite: 'arbres' },
        { nom: 'Aires de jeux', valeurCible: 6, valeurActuelle: 0, unite: 'aires' }
      ],
      documents: [
        { nom: 'Étude d\'impact environnemental', type: 'PDF', url: '/docs/espaces-verts-etude.pdf', datePublication: new Date('2024-01-15') }
      ]
    }
  ];

  budgetParticipatif: BudgetParticipatiif = {
    id: '2024',
    titre: 'Budget Participatif 2024',
    description: 'Les habitants de Sicap Liberté choisissent les projets à financer avec une enveloppe dédiée de 100 millions FCFA.',
    budgetTotal: 100000000,
    budgetUtilise: 75000000,
    nombreProjets: 12,
    nombreVotants: 1247,
    dateOuverture: new Date('2024-01-01'),
    dateFermeture: new Date('2024-02-29'),
    statut: 'en_cours_realisation',
    projetsSelectionnes: [
      {
        id: '1',
        titre: 'Terrain de sport multisport',
        description: 'Construction d\'un terrain de basketball et football dans le quartier résidentiel',
        budget: 35000000,
        votes: 456,
        quartier: 'Quartier résidentiel',
        categorie: 'Sport',
        selectionne: true
      },
      {
        id: '2',
        titre: 'Éclairage public LED',
        description: 'Installation d\'éclairages LED sur les axes principaux pour améliorer la sécurité',
        budget: 25000000,
        votes: 389,
        quartier: 'Centre-ville',
        categorie: 'Sécurité',
        selectionne: true
      },
      {
        id: '3',
        titre: 'Bibliothèque de quartier',
        description: 'Création d\'une petite bibliothèque communautaire avec espace numérique',
        budget: 15000000,
        votes: 234,
        quartier: 'Quartier populaire',
        categorie: 'Éducation',
        selectionne: true
      }
    ]
  };

  appelsOffres: AppelOffre[] = [
    {
      id: '1',
      titre: 'Fourniture et installation de mobilier urbain',
      description: 'Appel d\'offres pour la fourniture et l\'installation de bancs publics, poubelles et abris bus dans la commune.',
      montant: 45000000,
      datePublication: new Date('2024-01-10'),
      dateLimite: new Date('2024-02-15'),
      statut: 'attribue',
      criteres: [
        'Qualité des matériaux proposés',
        'Respect des délais de livraison',
        'Prix compétitif',
        'Expérience dans le domaine',
        'Garantie offerte'
      ],
      documents: [
        { nom: 'Cahier des charges', type: 'PDF', url: '/docs/ao-mobilier-cdc.pdf', datePublication: new Date('2024-01-10') },
        { nom: 'Règlement de consultation', type: 'PDF', url: '/docs/ao-mobilier-reglement.pdf', datePublication: new Date('2024-01-10') }
      ],
      attributaire: 'Entreprise METAL DESIGN SARL',
      montantAttribue: 42500000
    },
    {
      id: '2',
      titre: 'Travaux de voirie - Avenue Principale',
      description: 'Réfection complète de l\'Avenue Principale avec pose d\'enrobé, création de trottoirs et signalisation.',
      montant: 180000000,
      datePublication: new Date('2024-01-20'),
      dateLimite: new Date('2024-03-01'),
      statut: 'ouvert',
      criteres: [
        'Capacité technique et financière',
        'Références similaires',
        'Méthodologie proposée',
        'Délai d\'exécution',
        'Prix global'
      ],
      documents: [
        { nom: 'Dossier de consultation', type: 'PDF', url: '/docs/ao-voirie-dossier.pdf', datePublication: new Date('2024-01-20') },
        { nom: 'Plans techniques', type: 'PDF', url: '/docs/ao-voirie-plans.pdf', datePublication: new Date('2024-01-20') }
      ]
    }
  ];

  donneesFinancieres: DonneeFinanciere[] = [
    {
      annee: 2023,
      recettes: {
        impots: 450000000,
        dotations: 320000000,
        subventions: 180000000,
        autres: 50000000,
        total: 1000000000
      },
      depenses: {
        personnel: 380000000,
        investissement: 280000000,
        fonctionnement: 220000000,
        dette: 80000000,
        autres: 40000000,
        total: 1000000000
      },
      dette: 150000000,
      investissements: 280000000,
      fonctionnement: 640000000
    },
    {
      annee: 2024,
      recettes: {
        impots: 480000000,
        dotations: 350000000,
        subventions: 200000000,
        autres: 70000000,
        total: 1100000000
      },
      depenses: {
        personnel: 420000000,
        investissement: 320000000,
        fonctionnement: 250000000,
        dette: 70000000,
        autres: 40000000,
        total: 1100000000
      },
      dette: 120000000,
      investissements: 320000000,
      fonctionnement: 710000000
    }
  ];

  // Variables d'état
  ongletActif: string = 'projets';
  projetSelectionne: ProjetFinance | null = null;
  appelOffreSelectionne: AppelOffre | null = null;
  anneeSelectionnee: number = 2024;
  
  // Variables de filtrage
  filtreStatutProjet: string = 'tous';
  filtreCategorieProjet: string = 'toutes';

  constructor() { }

  ngOnInit(): void {
  }

  // Méthodes de navigation
  changerOnglet(onglet: string): void {
    this.ongletActif = onglet;
  }

  // Méthodes pour les projets
  get projetsAffiches(): ProjetFinance[] {
    let resultats = this.projetsFinances;

    if (this.filtreStatutProjet !== 'tous') {
      resultats = resultats.filter(p => p.statut === this.filtreStatutProjet);
    }

    if (this.filtreCategorieProjet !== 'toutes') {
      resultats = resultats.filter(p => p.categorie === this.filtreCategorieProjet);
    }

    return resultats.sort((a, b) => b.dateDebut.getTime() - a.dateDebut.getTime());
  }

  get categoriesProjets(): string[] {
    return [...new Set(this.projetsFinances.map(p => p.categorie))];
  }

  ouvrirProjet(projet: ProjetFinance): void {
    this.projetSelectionne = projet;
  }

  fermerProjet(): void {
    this.projetSelectionne = null;
  }

  // Méthodes pour les appels d'offres
  get appelsOffresOuverts(): AppelOffre[] {
    return this.appelsOffres.filter(ao => ao.statut === 'ouvert' && new Date() <= ao.dateLimite);
  }

  get appelsOffresFermes(): AppelOffre[] {
    return this.appelsOffres.filter(ao => ao.statut === 'ferme' || ao.statut === 'attribue');
  }

  ouvrirAppelOffre(appel: AppelOffre): void {
    this.appelOffreSelectionne = appel;
  }

  fermerAppelOffre(): void {
    this.appelOffreSelectionne = null;
  }

  // Méthodes pour les données financières
  get donneesAnneeSelectionnee(): DonneeFinanciere {
    return this.donneesFinancieres.find(d => d.annee === this.anneeSelectionnee) || this.donneesFinancieres[0];
  }

  get anneesDisponibles(): number[] {
    return this.donneesFinancieres.map(d => d.annee).sort((a, b) => b - a);
  }

  // Méthodes utilitaires
  getStatutLabel(statut: string): string {
    const labels: { [key: string]: string } = {
      'planifie': 'Planifié',
      'en_cours': 'En cours',
      'termine': 'Terminé',
      'suspendu': 'Suspendu',
      'ouvert': 'Ouvert',
      'ferme': 'Fermé',
      'attribue': 'Attribué',
      'en_cours_realisation': 'En cours de réalisation'
    };
    return labels[statut] || statut;
  }

  getStatutCouleur(statut: string): string {
    const couleurs: { [key: string]: string } = {
      'planifie': '#3498db',
      'en_cours': '#f39c12',
      'termine': '#27ae60',
      'suspendu': '#e74c3c',
      'ouvert': '#27ae60',
      'ferme': '#95a5a6',
      'attribue': '#2c5aa0',
      'en_cours_realisation': '#f39c12'
    };
    return couleurs[statut] || '#2c5aa0';
  }

  getPourcentageAvancement(projet: ProjetFinance): number {
    return Math.round((projet.budgetUtilise / projet.budget) * 100);
  }

  getPourcentageIndicateur(indicateur: IndicateurProjet): number {
    return Math.round((indicateur.valeurActuelle / indicateur.valeurCible) * 100);
  }

  formaterMontant(montant: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(montant);
  }

  formaterDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  tempsRestant(dateLimite: Date): string {
    const maintenant = new Date();
    const diffMs = dateLimite.getTime() - maintenant.getTime();
    const diffJours = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffJours < 0) return 'Expiré';
    if (diffJours === 0) return 'Aujourd\'hui';
    if (diffJours === 1) return 'Demain';
    return `${diffJours} jours restants`;
  }

  telechargerDocument(document: DocumentProjet): void {
    // Simulation du téléchargement
    console.log(`Téléchargement du document: ${document.nom}`);
    // Ici, vous implémenteriez la logique de téléchargement réelle
  }

  resetFiltres(): void {
    this.filtreStatutProjet = 'tous';
    this.filtreCategorieProjet = 'toutes';
  }

  // Méthodes pour les graphiques (simulation)
  getRecettesData(): any[] {
    const donnees = this.donneesAnneeSelectionnee.recettes;
    return [
      { name: 'Impôts locaux', value: donnees.impots },
      { name: 'Dotations État', value: donnees.dotations },
      { name: 'Subventions', value: donnees.subventions },
      { name: 'Autres recettes', value: donnees.autres }
    ];
  }

  getDepensesData(): any[] {
    const donnees = this.donneesAnneeSelectionnee.depenses;
    return [
      { name: 'Personnel', value: donnees.personnel },
      { name: 'Investissement', value: donnees.investissement },
      { name: 'Fonctionnement', value: donnees.fonctionnement },
      { name: 'Service de la dette', value: donnees.dette },
      { name: 'Autres dépenses', value: donnees.autres }
    ];
  }
}
