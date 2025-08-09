import { Component } from '@angular/core';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent {
  getNomCategorie(categorieId: string): string {
  const categorie = this.categories.find(c => c.id === categorieId);
  return categorie?.nom || '';
}
getContenuFormate(contenu: string): string {
  return contenu ? contenu.replace(/\n/g, '<br>') : '';
}
  // Articles d'actualités
  actualites = [
    {
      id: 1,
      titre: 'Inauguration du nouveau marché municipal',
      resume: 'Le nouveau marché de Sicap Liberté sera officiellement inauguré le 25 janvier en présence du Maire et des autorités locales.',
      contenu: `La Mairie de Sicap Liberté est fière d'annoncer l'inauguration de son nouveau marché municipal, fruit de 18 mois de travaux intensifs. Cette infrastructure moderne de 2000 m² comprend 150 étals équipés, des espaces de stockage réfrigérés, et des installations sanitaires aux normes internationales.

      Le projet, d'un coût total de 500 millions de FCFA, a été financé grâce à un partenariat entre la mairie et l'Agence de Développement Municipal (ADM). Les travaux ont été réalisés par l'entreprise locale BATCO, permettant de créer plus de 200 emplois temporaires.

      Ce nouveau marché permettra d'améliorer significativement les conditions de travail des commerçants et l'hygiène alimentaire. Il dispose également d'un parking de 50 places et d'un espace dédié aux activités culturelles.

      L'inauguration aura lieu le 25 janvier à 10h00 en présence de M. le Maire, des conseillers municipaux, et des représentants des associations de commerçants.`,
      auteur: 'Service Communication',
      datePublication: new Date('2024-01-15'),
      dateEvenement: new Date('2024-01-25'),
      categorie: 'Infrastructure',
      tags: ['marché', 'inauguration', 'commerce', 'développement'],
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop&crop=center',
      galerie: [
        'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center'
      ],
      statut: 'publié',
      vues: 1250,
      partages: 45,
      commentaires: 23,
      urgent: false
    },
    {
      id: 2,
      titre: 'Campagne de vaccination gratuite contre la grippe',
      resume: 'Une campagne de vaccination gratuite est organisée du 20 au 30 janvier au centre de santé municipal.',
      contenu: `Dans le cadre de la prévention sanitaire, la Mairie de Sicap Liberté, en partenariat avec le Ministère de la Santé, organise une campagne de vaccination gratuite contre la grippe saisonnière.

      Cette campagne s'adresse en priorité aux personnes âgées de plus de 65 ans, aux femmes enceintes, aux personnes souffrant de maladies chroniques, et aux professionnels de santé.

      La vaccination aura lieu au Centre de Santé Municipal (Avenue de la République) du lundi au vendredi de 8h00 à 16h00, et le samedi de 8h00 à 12h00.

      Documents à apporter :
      - Pièce d'identité
      - Carnet de vaccination (si disponible)
      - Certificat médical pour les personnes à risque

      Cette initiative s'inscrit dans notre politique de santé publique visant à protéger la population, particulièrement en cette période de recrudescence des infections respiratoires.

      Pour plus d'informations, contactez le 33 XXX XX 20 ou rendez-vous directement au centre de santé.`,
      auteur: 'Service Santé',
      datePublication: new Date('2024-01-10'),
      dateEvenement: new Date('2024-01-20'),
      dateFinEvenement: new Date('2024-01-30'),
      categorie: 'Santé',
      tags: ['vaccination', 'santé', 'prévention', 'gratuit'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center',
      galerie: [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center'
      ],
      statut: 'publié',
      vues: 890,
      partages: 67,
      commentaires: 12,
      urgent: true
    },
    {
      id: 3,
      titre: 'Travaux de réfection de la route principale',
      resume: 'Des travaux de réfection de la route principale débuteront le 1er février et dureront environ 3 mois.',
      contenu: `La Mairie de Sicap Liberté informe la population du démarrage prochain des travaux de réfection de la route principale (Avenue Cheikh Anta Diop), prévus du 1er février au 30 avril 2024.

      Ces travaux, d'un montant de 800 millions de FCFA, comprennent :
      - Réfection complète du revêtement sur 2,5 km
      - Installation d'un nouveau système d'éclairage LED
      - Création de trottoirs accessibles aux personnes à mobilité réduite
      - Aménagement de pistes cyclables
      - Installation de nouveaux panneaux de signalisation

      Pendant la durée des travaux, des déviations seront mises en place :
      - Circulation alternée de 6h00 à 18h00
      - Déviation complète par la rue Liberté 2 de 18h00 à 6h00
      - Accès maintenu aux commerces et habitations

      Un plan de circulation détaillé sera distribué dans tous les foyers et affiché aux points stratégiques de la commune.

      Nous remercions la population pour sa compréhension et l'invitons à respecter la signalisation temporaire pour la sécurité de tous.`,
      auteur: 'Service Technique',
      datePublication: new Date('2024-01-08'),
      dateEvenement: new Date('2024-02-01'),
      dateFinEvenement: new Date('2024-04-30'),
      categorie: 'Travaux',
      tags: ['route', 'travaux', 'circulation', 'infrastructure'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center',
      galerie: [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
      ],
      statut: 'publié',
      vues: 2150,
      partages: 89,
      commentaires: 45,
      urgent: true
    },
    {
      id: 4,
      titre: 'Fête de la commune 2024 : "Sicap Liberté en fête"',
      resume: 'La traditionnelle fête de la commune aura lieu le 15 mars avec un programme riche en activités culturelles et sportives.',
      contenu: `La Mairie de Sicap Liberté a l'honneur d'inviter tous les habitants à la Fête de la commune 2024, qui se déroulera le samedi 15 mars de 10h00 à 22h00 sur l'esplanade de la mairie.

      Programme de la journée :

      10h00 - 12h00 : Cérémonie d'ouverture
      - Discours du Maire
      - Remise des prix aux meilleurs élèves
      - Présentation des réalisations 2023

      12h00 - 14h00 : Déjeuner communautaire
      - Plats traditionnels préparés par les associations
      - Animation musicale

      14h00 - 17h00 : Activités sportives
      - Tournoi de football inter-quartiers
      - Course à pied familiale
      - Démonstrations d'arts martiaux

      17h00 - 19h00 : Spectacles culturels
      - Danses traditionnelles
      - Concerts de groupes locaux
      - Théâtre pour enfants

      19h00 - 22h00 : Soirée dansante
      - Orchestre live
      - DJ set
      - Feu d'artifice de clôture

      Stands et expositions :
      - Artisanat local
      - Produits du terroir
      - Exposition photos "Sicap Liberté d'hier à aujourd'hui"

      Entrée gratuite pour tous. Restauration et boissons sur place.`,
      auteur: 'Comité des Fêtes',
      datePublication: new Date('2024-01-05'),
      dateEvenement: new Date('2024-03-15'),
      categorie: 'Événement',
      tags: ['fête', 'culture', 'sport', 'communauté', 'gratuit'],
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop&crop=center',
      galerie: [
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=center'
      ],
      statut: 'publié',
      vues: 1850,
      partages: 156,
      commentaires: 78,
      urgent: false
    },
    {
      id: 5,
      titre: 'Ouverture des inscriptions scolaires 2024-2025',
      resume: 'Les inscriptions pour l\'année scolaire 2024-2025 sont ouvertes du 15 janvier au 28 février dans toutes les écoles de la commune.',
      contenu: `La Mairie de Sicap Liberté informe les parents d'élèves que les inscriptions pour l'année scolaire 2024-2025 sont ouvertes dans toutes les écoles publiques de la commune.

      Période d'inscription : du 15 janvier au 28 février 2024

      Écoles concernées :
      - École élémentaire Sicap Liberté A (CP au CM2)
      - École élémentaire Sicap Liberté B (CP au CM2)
      - Collège d'Enseignement Moyen (6ème à 3ème)
      - Lycée Technique (2nde à Terminale)

      Documents requis :
      - Acte de naissance de l'enfant
      - Certificat de résidence des parents
      - Carnet de vaccination à jour
      - Bulletin scolaire de l'année précédente
      - 4 photos d'identité de l'enfant
      - Certificat médical d'aptitude

      Nouveautés 2024-2025 :
      - Ouverture d'une classe bilingue français-anglais
      - Programme d'initiation à l'informatique dès le CP
      - Cantine scolaire gratuite pour les familles nécessiteuses
      - Transport scolaire étendu aux quartiers périphériques

      Horaires d'inscription :
      Lundi à vendredi : 8h00 - 16h00
      Samedi : 8h00 - 12h00

      Pour les familles en difficulté, un accompagnement social est disponible au Service Social de la mairie (Bureau 202).

      Renseignements : 33 XXX XX 30 ou education@mairie-sicapliberte.sn`,
      auteur: 'Service Éducation',
      datePublication: new Date('2024-01-12'),
      dateEvenement: new Date('2024-01-15'),
      dateFinEvenement: new Date('2024-02-28'),
      categorie: 'Éducation',
      tags: ['inscription', 'école', 'éducation', 'enfants'],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&crop=center',
      galerie: [
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&crop=center'
      ],
      statut: 'publié',
      vues: 3200,
      partages: 245,
      commentaires: 89,
      urgent: true
    },
    {
      id: 6,
      titre: 'Nouveau système de collecte des déchets',
      resume: 'Un nouveau système de collecte des déchets avec tri sélectif sera mis en place à partir du 1er mars 2024.',
      contenu: `Dans le cadre de sa politique environnementale, la Mairie de Sicap Liberté met en place un nouveau système de collecte des déchets avec tri sélectif, effectif à partir du 1er mars 2024.

      Nouveautés du système :

      1. Tri sélectif obligatoire :
      - Bac vert : déchets organiques (restes alimentaires, déchets de jardin)
      - Bac jaune : recyclables (plastique, papier, carton, métal)
      - Bac gris : déchets non recyclables

      2. Nouveaux horaires de collecte :
      - Déchets organiques : mardi et vendredi (6h00-10h00)
      - Recyclables : mercredi (6h00-12h00)
      - Déchets non recyclables : lundi et jeudi (6h00-10h00)

      3. Distribution gratuite des bacs :
      - Retrait au Service Technique (Bureau 102)
      - Livraison à domicile pour les personnes âgées
      - Formation au tri incluse

      4. Points de collecte spéciaux :
      - Déchets électroniques : 1er samedi du mois
      - Encombrants : sur rendez-vous (33 XXX XX 25)
      - Déchets verts : compostage communautaire

      Avantages :
      - Réduction de 40% du volume des déchets
      - Création de 15 emplois verts
      - Revenus de la vente des recyclables pour la commune
      - Amélioration de l'environnement

      Des agents de sensibilisation passeront dans tous les quartiers en février pour expliquer le nouveau système.

      Sanctions en cas de non-respect : amende de 5000 à 25000 FCFA.`,
      auteur: 'Service Environnement',
      datePublication: new Date('2024-01-18'),
      dateEvenement: new Date('2024-03-01'),
      categorie: 'Environnement',
      tags: ['déchets', 'tri', 'environnement', 'recyclage'],
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop&crop=center',
      galerie: [
        'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop&crop=center'
      ],
      statut: 'publié',
      vues: 1650,
      partages: 78,
      commentaires: 34,
      urgent: false
    }
  ];

  // Catégories d'actualités
  categories = [
    { id: 'toutes', nom: 'Toutes les actualités', couleur: '#2c5aa0' },
    { id: 'Infrastructure', nom: 'Infrastructure', couleur: '#e74c3c' },
    { id: 'Santé', nom: 'Santé', couleur: '#27ae60' },
    { id: 'Travaux', nom: 'Travaux', couleur: '#f39c12' },
    { id: 'Événement', nom: 'Événements', couleur: '#9b59b6' },
    { id: 'Éducation', nom: 'Éducation', couleur: '#3498db' },
    { id: 'Environnement', nom: 'Environnement', couleur: '#1abc9c' }
  ];

  // Filtres et recherche
  categorieSelectionnee = 'toutes';
  rechercheTexte = '';
  affichage = 'grille'; // 'grille' ou 'liste'
  
  // Article sélectionné pour affichage détaillé
  articleSelectionne: any = null;
  
  // Pagination
  articlesParPage = 6;
  pageActuelle = 1;

  constructor() { 
    // Trier les actualités par date de publication (plus récent en premier)
    this.actualites.sort((a, b) => b.datePublication.getTime() - a.datePublication.getTime());
  }

  // Obtenir les actualités filtrées
  get actualitesFiltrees() {
    let articles = this.actualites;

    // Filtrage par catégorie
    if (this.categorieSelectionnee !== 'toutes') {
      articles = articles.filter(article => article.categorie === this.categorieSelectionnee);
    }

    // Filtrage par recherche texte
    if (this.rechercheTexte) {
      const recherche = this.rechercheTexte.toLowerCase();
      articles = articles.filter(article => 
        article.titre.toLowerCase().includes(recherche) ||
        article.resume.toLowerCase().includes(recherche) ||
        article.contenu.toLowerCase().includes(recherche) ||
        article.tags.some(tag => tag.toLowerCase().includes(recherche))
      );
    }

    return articles;
  }

  // Obtenir les actualités paginées
  get actualitesAffichees() {
    const debut = (this.pageActuelle - 1) * this.articlesParPage;
    const fin = debut + this.articlesParPage;
    return this.actualitesFiltrees.slice(debut, fin);
  }

  // Obtenir le nombre total de pages
  get nombrePages() {
    return Math.ceil(this.actualitesFiltrees.length / this.articlesParPage);
  }

  // Obtenir les actualités urgentes
  get actualitesUrgentes() {
    return this.actualites.filter(article => article.urgent && article.statut === 'publié').slice(0, 3);
  }

  // Changer de catégorie
  changerCategorie(categorie: string) {
    this.categorieSelectionnee = categorie;
    this.pageActuelle = 1;
  }

  // Changer le mode d'affichage
  changerAffichage(mode: string) {
    this.affichage = mode;
  }

  // Changer de page
  changerPage(page: number) {
    if (page >= 1 && page <= this.nombrePages) {
      this.pageActuelle = page;
    }
  }

  // Sélectionner un article pour affichage détaillé
  selectionnerArticle(article: any) {
    this.articleSelectionne = article;
    // Incrémenter le nombre de vues
    article.vues++;
  }

  // Fermer les détails de l'article
  fermerDetails() {
    this.articleSelectionne = null;
  }

  // Partager un article
  partagerArticle(article: any, plateforme: string) {
    article.partages++;
    
    const url = `${window.location.origin}/actualites/${article.id}`;
    const texte = `${article.titre} - ${article.resume}`;
    
    switch (plateforme) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(texte)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(texte + ' ' + url)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(article.titre)}&body=${encodeURIComponent(texte + '\n\n' + url)}`;
        break;
    }
  }

  // Obtenir la couleur de la catégorie
  getCouleurCategorie(categorie: string): string {
    const cat = this.categories.find(c => c.id === categorie);
    return cat ? cat.couleur : '#2c5aa0';
  }

  // Formater la date
  formaterDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  // Calculer le temps écoulé depuis la publication
  tempsEcoule(date: Date): string {
    const maintenant = new Date();
    const diff = maintenant.getTime() - date.getTime();
    const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (jours === 0) {
      const heures = Math.floor(diff / (1000 * 60 * 60));
      if (heures === 0) {
        const minutes = Math.floor(diff / (1000 * 60));
        return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
      }
      return `Il y a ${heures} heure${heures > 1 ? 's' : ''}`;
    } else if (jours === 1) {
      return 'Hier';
    } else if (jours < 7) {
      return `Il y a ${jours} jours`;
    } else {
      return this.formaterDate(date);
    }
  }

  // Vérifier si un événement est à venir
  estAVenir(article: any): boolean {
    if (!article.dateEvenement) return false;
    return article.dateEvenement.getTime() > new Date().getTime();
  }

  // Vérifier si un événement est en cours
  estEnCours(article: any): boolean {
    if (!article.dateEvenement) return false;
    const maintenant = new Date().getTime();
    const debut = article.dateEvenement.getTime();
    const fin = article.dateFinEvenement ? article.dateFinEvenement.getTime() : debut + (24 * 60 * 60 * 1000);
    return maintenant >= debut && maintenant <= fin;
  }
}
