import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Signalement {
  id: string;
  titre: string;
  description: string;
  categorie: string;
  priorite: 'basse' | 'moyenne' | 'haute' | 'urgente';
  statut: 'nouveau' | 'en_cours' | 'resolu' | 'ferme';
  dateCreation: Date;
  dateMiseAJour: Date;
  localisation: string;
  photos?: string[];
  commentairesPublics: CommentairePublic[];
  numeroReference: string;
}


interface CommentairePublic {
  id: string;
  auteur: string;
  message: string;
  date: Date;
  typeAuteur: 'citoyen' | 'administration';
}

interface Suggestion {
  id: string;
  titre: string;
  description: string;
  categorie: string;
  dateCreation: Date;
  votes: number;
  aVote: boolean;
  statut: 'en_attente' | 'en_etude' | 'acceptee' | 'rejetee';
  commentaires: CommentaireSuggestion[];
}

interface CommentaireSuggestion {
  id: string;
  auteur: string;
  message: string;
  date: Date;
  votes: number;
}

interface Sondage {
  id: string;
  titre: string;
  description: string;
  questions: QuestionSondage[];
  dateDebut: Date;
  dateFin: Date;
  actif: boolean;
  participations: number;
  aParticipe: boolean;
}

interface QuestionSondage {
  id: string;
  question: string;
  type: 'choix_unique' | 'choix_multiple' | 'texte' | 'note';
  options?: string[];
  reponseSelectionnee?: string | string[] | number | null;
}

interface CategorieSignalement {
  id: string;
  nom: string;
  icone: string;
  couleur: string;
  description: string;
}

@Component({
  selector: 'app-espace-citoyen',
  templateUrl: './espace-citoyen.component.html',
  styleUrls: ['./espace-citoyen.component.scss']
})
export class EspaceCitoyenComponent implements OnInit {
 categoriesSuggestionMap = new Map<string, string>();


  // Méthode pour récupérer le nom depuis la Map
  getNomCategorieSuggestion(categorieId: string): string {
    return this.categoriesSuggestionMap.get(categorieId) || 'Autre'; // Fallback si non trouvé
  }
  // Formulaires
  signalementForm: FormGroup;
  suggestionForm: FormGroup;
   transform(categorieId: string, categories: any[]): string {
    const categorie = categories.find(c => c.id === categorieId);
    return categorie ? categorie.nom : 'Autre';
  }
  // Données
  signalements: Signalement[] = [
    {
      id: '1',
      titre: 'Nid de poule sur l\'Avenue Bourguiba',
      description: 'Un grand nid de poule s\'est formé sur l\'Avenue Bourguiba, près du marché central. Il représente un danger pour les véhicules et les piétons.',
      categorie: 'voirie',
      priorite: 'haute',
      statut: 'en_cours',
      dateCreation: new Date('2024-01-15'),
      dateMiseAJour: new Date('2024-01-20'),
      localisation: 'Avenue Bourguiba, près du marché central',
      numeroReference: 'SIG-2024-001',
      photos: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'],
      commentairesPublics: [
        {
          id: '1',
          auteur: 'Service Voirie',
          message: 'Signalement pris en compte. Intervention prévue dans les 48h.',
          date: new Date('2024-01-16'),
          typeAuteur: 'administration'
        },
        {
          id: '2',
          auteur: 'Amadou D.',
          message: 'Merci pour la prise en compte rapide !',
          date: new Date('2024-01-17'),
          typeAuteur: 'citoyen'
        }
      ]
    },
    {
      id: '2',
      titre: 'Éclairage public défaillant',
      description: 'Plusieurs lampadaires ne fonctionnent plus dans le quartier résidentiel, créant des zones d\'obscurité dangereuses.',
      categorie: 'eclairage',
      priorite: 'moyenne',
      statut: 'nouveau',
      dateCreation: new Date('2024-01-18'),
      dateMiseAJour: new Date('2024-01-18'),
      localisation: 'Quartier résidentiel, Rue des Palmiers',
      numeroReference: 'SIG-2024-002',
      commentairesPublics: []
    }
  ];

  suggestions: Suggestion[] = [
    {
      id: '1',
      titre: 'Création d\'un parc pour enfants',
      description: 'Il serait intéressant de créer un parc avec des jeux pour enfants dans le quartier, car il n\'y a actuellement aucun espace de loisir pour les familles.',
      categorie: 'amenagement',
      dateCreation: new Date('2024-01-10'),
      votes: 47,
      aVote: false,
      statut: 'en_etude',
      commentaires: [
        {
          id: '1',
          auteur: 'Fatou S.',
          message: 'Excellente idée ! Mes enfants seraient ravis.',
          date: new Date('2024-01-12'),
          votes: 12
        },
        {
          id: '2',
          auteur: 'Moussa K.',
          message: 'Je soutiens cette proposition. Où pourrait-on l\'implanter ?',
          date: new Date('2024-01-14'),
          votes: 8
        }
      ]
    },
    {
      id: '2',
      titre: 'Amélioration des transports en commun',
      description: 'Augmenter la fréquence des bus et créer de nouvelles lignes pour mieux desservir tous les quartiers de la commune.',
      categorie: 'transport',
      dateCreation: new Date('2024-01-05'),
      votes: 89,
      aVote: true,
      statut: 'acceptee',
      commentaires: [
        {
          id: '1',
          auteur: 'Administration',
          message: 'Votre suggestion a été retenue. Mise en œuvre prévue pour le 2ème trimestre 2024.',
          date: new Date('2024-01-16'),
          votes: 25
        }
      ]
    }
  ];

  sondages: Sondage[] = [
    {
      id: '1',
      titre: 'Priorités d\'aménagement 2024',
      description: 'Aidez-nous à définir les priorités d\'aménagement pour l\'année 2024 en votant pour les projets qui vous tiennent le plus à cœur.',
      dateDebut: new Date('2024-01-01'),
      dateFin: new Date('2024-02-01'),
      actif: true,
      participations: 234,
      aParticipe: false,
      questions: [
        {
          id: '1',
          question: 'Quel projet d\'aménagement devrait être prioritaire ?',
          type: 'choix_unique',
          options: [
            'Rénovation du marché central',
            'Création d\'espaces verts',
            'Amélioration de la voirie',
            'Construction d\'un centre culturel'
          ]
        },
        {
          id: '2',
          question: 'Comment évaluez-vous la qualité des services municipaux actuels ?',
          type: 'note'
        },
        {
          id: '3',
          question: 'Quels services supplémentaires souhaiteriez-vous voir mis en place ?',
          type: 'choix_multiple',
          options: [
            'Services numériques en ligne',
            'Permanences de quartier',
            'Médiathèque',
            'Centre de loisirs',
            'Services aux seniors'
          ]
        }
      ]
    }
  ];

  categoriesSignalement: CategorieSignalement[] = [
    {
      id: 'voirie',
      nom: 'Voirie',
      icone: 'fas fa-road',
      couleur: '#e74c3c',
      description: 'Nids de poule, signalisation, chaussée'
    },
    {
      id: 'eclairage',
      nom: 'Éclairage public',
      icone: 'fas fa-lightbulb',
      couleur: '#f39c12',
      description: 'Lampadaires, éclairage défaillant'
    },
    {
      id: 'proprete',
      nom: 'Propreté',
      icone: 'fas fa-broom',
      couleur: '#27ae60',
      description: 'Déchets, nettoyage, dépôts sauvages'
    },
    {
      id: 'espaces_verts',
      nom: 'Espaces verts',
      icone: 'fas fa-tree',
      couleur: '#2ecc71',
      description: 'Parcs, jardins, arbres'
    },
    {
      id: 'securite',
      nom: 'Sécurité',
      icone: 'fas fa-shield-alt',
      couleur: '#9b59b6',
      description: 'Sécurité publique, incivilités'
    },
    {
      id: 'autre',
      nom: 'Autre',
      icone: 'fas fa-ellipsis-h',
      couleur: '#95a5a6',
      description: 'Autres signalements'
    }
  ];

  categoriesSuggestion = [
    { id: 'amenagement', nom: 'Aménagement urbain' },
    { id: 'transport', nom: 'Transport' },
    { id: 'culture', nom: 'Culture et loisirs' },
    { id: 'social', nom: 'Social' },
    { id: 'environnement', nom: 'Environnement' },
    { id: 'numerique', nom: 'Numérique' },
    { id: 'autre', nom: 'Autre' }
  ];

  // Variables d'état
  ongletActif: string = 'signalements';
  signalementSelectionne: Signalement | null = null;
  suggestionSelectionnee: Suggestion | null = null;
  sondageSelectionne: Sondage | null = null;
  
  // Variables de filtrage
  filtreStatutSignalement: string = 'tous';
  filtreCategorieSignalement: string = 'toutes';
  filtreStatutSuggestion: string = 'tous';
  
  // Variables d'affichage
  affichageSignalements: 'liste' | 'cartes' = 'cartes';

  constructor(private fb: FormBuilder) {
    this.signalementForm = this.fb.group({
      titre: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      categorie: ['', Validators.required],
      localisation: ['', Validators.required],
      priorite: ['moyenne'],
      photos: [[]]
    });

    this.suggestionForm = this.fb.group({
      titre: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      categorie: ['', Validators.required]
    });
  }

  ngOnInit(): void {
       this.categoriesSuggestion.forEach(c => {
      this.categoriesSuggestionMap.set(c.id, c.nom);
    });
  }

  // Méthodes de navigation
  changerOnglet(onglet: string): void {
    this.ongletActif = onglet;
  }

  // Méthodes pour les signalements
  get signalementsAffiches(): Signalement[] {
    let resultats = this.signalements;

    if (this.filtreStatutSignalement !== 'tous') {
      resultats = resultats.filter(s => s.statut === this.filtreStatutSignalement);
    }

    if (this.filtreCategorieSignalement !== 'toutes') {
      resultats = resultats.filter(s => s.categorie === this.filtreCategorieSignalement);
    }

    return resultats.sort((a, b) => b.dateMiseAJour.getTime() - a.dateMiseAJour.getTime());
  }

  ouvrirSignalement(signalement: Signalement): void {
    this.signalementSelectionne = signalement;
  }
toggleOptionSelection(question: QuestionSondage, option: string, event: Event): void {
  const target = event.target as HTMLInputElement;
  const isChecked = target.checked;

  if (!question.reponseSelectionnee || !Array.isArray(question.reponseSelectionnee)) {
    question.reponseSelectionnee = [];
  }

  if (isChecked) {
    (question.reponseSelectionnee as string[]).push(option);
  } else {
    const index = (question.reponseSelectionnee as string[]).indexOf(option);
    if (index > -1) {
      (question.reponseSelectionnee as string[]).splice(index, 1);
    }
  }
}
isOptionSelected(question: QuestionSondage, option: string): boolean {
  return Array.isArray(question.reponseSelectionnee) 
    ? question.reponseSelectionnee.includes(option)
    : false;
}
  fermerSignalement(): void {
    this.signalementSelectionne = null;
  }

  soumettreSignalement(): void {
    if (this.signalementForm.valid) {
      const nouveauSignalement: Signalement = {
        id: Date.now().toString(),
        ...this.signalementForm.value,
        statut: 'nouveau',
        dateCreation: new Date(),
        dateMiseAJour: new Date(),
        numeroReference: `SIG-2024-${String(this.signalements.length + 1).padStart(3, '0')}`,
        commentairesPublics: []
      };

      this.signalements.unshift(nouveauSignalement);
      this.signalementForm.reset();
      this.changerOnglet('signalements');
      
      // Simulation d'une notification de succès
      console.log('Signalement créé avec succès:', nouveauSignalement);
    }
  }

  // Méthodes pour les suggestions
  get suggestionsAffichees(): Suggestion[] {
    let resultats = this.suggestions;

    if (this.filtreStatutSuggestion !== 'tous') {
      resultats = resultats.filter(s => s.statut === this.filtreStatutSuggestion);
    }

    return resultats.sort((a, b) => b.votes - a.votes);
  }

  ouvrirSuggestion(suggestion: Suggestion): void {
    this.suggestionSelectionnee = suggestion;
  }

  fermerSuggestion(): void {
    this.suggestionSelectionnee = null;
  }

  voterSuggestion(suggestion: Suggestion): void {
    if (!suggestion.aVote) {
      suggestion.votes++;
      suggestion.aVote = true;
    }
  }

  soumettresuggestion(): void {
    if (this.suggestionForm.valid) {
      const nouvelleSuggestion: Suggestion = {
        id: Date.now().toString(),
        ...this.suggestionForm.value,
        dateCreation: new Date(),
        votes: 0,
        aVote: false,
        statut: 'en_attente',
        commentaires: []
      };

      this.suggestions.unshift(nouvelleSuggestion);
      this.suggestionForm.reset();
      this.changerOnglet('suggestions');
      
      console.log('Suggestion créée avec succès:', nouvelleSuggestion);
    }
  }

  // Méthodes pour les sondages
  get sondagesActifs(): Sondage[] {
    return this.sondages.filter(s => s.actif && new Date() <= s.dateFin);
  }

  get sondagesTermines(): Sondage[] {
    return this.sondages.filter(s => !s.actif || new Date() > s.dateFin);
  }

  ouvrirSondage(sondage: Sondage): void {
    this.sondageSelectionne = sondage;
  }

  fermerSondage(): void {
    this.sondageSelectionne = null;
  }

  participerSondage(sondage: Sondage): void {
    // Validation des réponses
    const reponsesValides = sondage.questions.every(q => {
      if (q.type === 'choix_unique' || q.type === 'note') {
        return q.reponseSelectionnee !== undefined;
      } else if (q.type === 'choix_multiple') {
        return Array.isArray(q.reponseSelectionnee) && q.reponseSelectionnee.length > 0;
      }
      return true;
    });

    if (reponsesValides) {
      sondage.aParticipe = true;
      sondage.participations++;
      this.fermerSondage();
      console.log('Participation au sondage enregistrée:', sondage);
    }
  }

  // Méthodes utilitaires
  getCouleurCategorie(categorieId: string): string {
    const categorie = this.categoriesSignalement.find(c => c.id === categorieId);
    return categorie ? categorie.couleur : '#2c5aa0';
  }

  getIconeCategorie(categorieId: string): string {
    const categorie = this.categoriesSignalement.find(c => c.id === categorieId);
    return categorie ? categorie.icone : 'fas fa-exclamation-circle';
  }

  getNomCategorie(categorieId: string): string {
    const categorie = this.categoriesSignalement.find(c => c.id === categorieId);
    return categorie ? categorie.nom : categorieId;
  }

  getStatutLabel(statut: string): string {
    const labels: { [key: string]: string } = {
      'nouveau': 'Nouveau',
      'en_cours': 'En cours',
      'resolu': 'Résolu',
      'ferme': 'Fermé',
      'en_attente': 'En attente',
      'en_etude': 'En étude',
      'acceptee': 'Acceptée',
      'rejetee': 'Rejetée'
    };
    return labels[statut] || statut;
  }

  getStatutCouleur(statut: string): string {
    const couleurs: { [key: string]: string } = {
      'nouveau': '#3498db',
      'en_cours': '#f39c12',
      'resolu': '#27ae60',
      'ferme': '#95a5a6',
      'en_attente': '#9b59b6',
      'en_etude': '#e67e22',
      'acceptee': '#27ae60',
      'rejetee': '#e74c3c'
    };
    return couleurs[statut] || '#2c5aa0';
  }

  getPrioriteLabel(priorite: string): string {
    const labels: { [key: string]: string } = {
      'basse': 'Basse',
      'moyenne': 'Moyenne',
      'haute': 'Haute',
      'urgente': 'Urgente'
    };
    return labels[priorite] || priorite;
  }

  getPrioriteCouleur(priorite: string): string {
    const couleurs: { [key: string]: string } = {
      'basse': '#27ae60',
      'moyenne': '#f39c12',
      'haute': '#e67e22',
      'urgente': '#e74c3c'
    };
    return couleurs[priorite] || '#2c5aa0';
  }

  formaterDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  tempsEcoule(date: Date): string {
    const maintenant = new Date();
    const diffMs = maintenant.getTime() - date.getTime();
    const diffJours = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffJours === 0) return 'Aujourd\'hui';
    if (diffJours === 1) return 'Hier';
    if (diffJours < 7) return `Il y a ${diffJours} jours`;
    if (diffJours < 30) return `Il y a ${Math.floor(diffJours / 7)} semaines`;
    return `Il y a ${Math.floor(diffJours / 30)} mois`;
  }

  // Méthodes de gestion des fichiers
  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Simulation de l'upload des fichiers
      const photosUrls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        photosUrls.push(`/assets/uploads/${files[i].name}`);
      }
      this.signalementForm.patchValue({ photos: photosUrls });
    }
  }

  supprimerPhoto(index: number): void {
    const photos = this.signalementForm.get('photos')?.value || [];
    photos.splice(index, 1);
    this.signalementForm.patchValue({ photos });
  }

  resetFiltres(): void {
    this.filtreStatutSignalement = 'tous';
    this.filtreCategorieSignalement = 'toutes';
    this.filtreStatutSuggestion = 'tous';
  }
}
