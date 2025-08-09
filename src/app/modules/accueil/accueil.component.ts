import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit, OnDestroy {
  title = 'Mairie de Sicap Liberté';
  
  // Hero slider properties
  currentSlide = 0;
  sliderInterval: any;
  
  heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop&crop=center',
      title: 'Bienvenue à Sicap Liberté',
      subtitle: 'Votre mairie au service des citoyens',
      primaryAction: { text: 'Services en ligne', link: '/services-en-ligne' },
      secondaryAction: { text: 'Nous contacter', link: '/contact' }
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop&crop=center',
      title: 'Nos projets en cours',
      subtitle: 'Découvrez les initiatives pour améliorer notre commune',
      primaryAction: { text: 'Voir les projets', link: '/presentation' },
      secondaryAction: { text: 'Nous contacter', link: '/contact' }
    },
    {
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop&crop=center',
      title: 'Services aux citoyens',
      subtitle: 'Simplifiez vos démarches administratives en ligne',
      primaryAction: { text: 'Espace citoyen', link: '/espace-citoyen' },
      secondaryAction: { text: 'Démarches', link: '/demarches' }
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=center',
      title: 'Restez informés',
      subtitle: 'Suivez toute l\'actualité de votre commune',
      primaryAction: { text: 'Voir actualités', link: '/actualites' },
      secondaryAction: { text: 'Contact', link: '/contact' }
    }
  ];
  
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
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 2,
      titre: 'Campagne de vaccination',
      resume: 'Organisation d\'une campagne de vaccination gratuite',
      date: new Date('2024-01-10'),
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 3,
      titre: 'Fête de la commune',
      resume: 'Célébration annuelle de notre commune le 25 janvier',
      date: new Date('2024-01-08'),
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=250&fit=crop&crop=center'
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
  
  ngOnInit() {
    this.startSliderAutoPlay();
  }
  
  ngOnDestroy() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }
  
  startSliderAutoPlay() {
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
  }
  
  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.heroSlides.length - 1 : this.currentSlide - 1;
  }
  
  goToSlide(index: number) {
    this.currentSlide = index;
    // Reset auto-play timer
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
      this.startSliderAutoPlay();
    }
  }
}
