import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ServiceContact {
  id: string;
  nom: string;
  description: string;
  responsable: string;
  telephone: string;
  email: string;
  horaires: string;
  adresse: string;
  icone: string;
  couleur: string;
}

interface PersonnelMairie {
  id: string;
  nom: string;
  prenom: string;
  poste: string;
  service: string;
  telephone?: string;
  email?: string;
  photo?: string;
  biographie?: string;
}

interface HorairesOuverture {
  jour: string;
  matin: string;
  apres_midi: string;
  ferme: boolean;
}

interface MessageContact {
  id: string;
  nom: string;
  email: string;
  telephone?: string;
  sujet: string;
  message: string;
  service: string;
  dateEnvoi: Date;
  statut: 'nouveau' | 'lu' | 'traite';
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  
  servicesContact: ServiceContact[] = [
    {
      id: 'accueil',
      nom: 'Accueil général',
      description: 'Informations générales et orientation vers les services',
      responsable: 'Secrétariat général',
      telephone: '33 8 XX XX XX XX',
      email: 'accueil@sicap-liberte.sn',
      horaires: 'Lun-Ven: 8h-16h',
      adresse: 'Mairie de Sicap Liberté, Avenue Principale',
      icone: 'fas fa-info-circle',
      couleur: '#2c5aa0'
    },
    {
      id: 'etat-civil',
      nom: 'État Civil',
      description: 'Actes de naissance, mariage, décès, carte d\'identité',
      responsable: 'Mme Fatou DIOP',
      telephone: '33 8 XX XX XX XX',
      email: 'etat-civil@sicap-liberte.sn',
      horaires: 'Lun-Ven: 8h-16h',
      adresse: 'Bureau 101, Rez-de-chaussée',
      icone: 'fas fa-user',
      couleur: '#27ae60'
    },
    {
      id: 'urbanisme',
      nom: 'Urbanisme',
      description: 'Permis de construire, déclarations de travaux',
      responsable: 'M. Amadou NDIAYE',
      telephone: '33 8 XX XX XX XX',
      email: 'urbanisme@sicap-liberte.sn',
      horaires: 'Lun-Ven: 8h-16h',
      adresse: 'Bureau 201, 1er étage',
      icone: 'fas fa-building',
      couleur: '#e74c3c'
    },
    {
      id: 'finances',
      nom: 'Finances',
      description: 'Impôts locaux, taxes, redevances',
      responsable: 'M. Ousmane FALL',
      telephone: '33 8 XX XX XX XX',
      email: 'finances@sicap-liberte.sn',
      horaires: 'Lun-Ven: 8h-16h',
      adresse: 'Bureau 102, Rez-de-chaussée',
      icone: 'fas fa-euro-sign',
      couleur: '#f39c12'
    },
    {
      id: 'social',
      nom: 'Action Sociale',
      description: 'Aides sociales, accompagnement des familles',
      responsable: 'Mme Aïssatou SARR',
      telephone: '33 8 XX XX XX XX',
      email: 'social@sicap-liberte.sn',
      horaires: 'Lun-Ven: 8h-16h',
      adresse: 'Bureau 203, 1er étage',
      icone: 'fas fa-heart',
      couleur: '#9b59b6'
    },
    {
      id: 'technique',
      nom: 'Services Techniques',
      description: 'Voirie, éclairage public, espaces verts',
      responsable: 'M. Ibrahima DIALLO',
      telephone: '33 8 XX XX XX XX',
      email: 'technique@sicap-liberte.sn',
      horaires: 'Lun-Ven: 8h-16h',
      adresse: 'Annexe technique, Avenue des Palmiers',
      icone: 'fas fa-tools',
      couleur: '#34495e'
    }
  ];

  personnelMairie: PersonnelMairie[] = [
    {
      id: '1',
      nom: 'SECK',
      prenom: 'Moussa',
      poste: 'Maire',
      service: 'Direction générale',
      telephone: '33 8 XX XX XX XX',
      email: 'maire@sicap-liberte.sn',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face',
      biographie: 'Élu maire en 2022, M. Moussa SECK s\'engage pour le développement durable et la modernisation de Sicap Liberté.'
    },
    {
      id: '2',
      nom: 'DIOP',
      prenom: 'Fatou',
      poste: 'Secrétaire Générale',
      service: 'Secrétariat général',
      telephone: '33 8 XX XX XX XX',
      email: 'secretaire.general@sicap-liberte.sn',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616c5e0b8e4?w=200&h=250&fit=crop&crop=face',
      biographie: 'Forte de 15 ans d\'expérience dans l\'administration publique, Mme Fatou DIOP coordonne les services municipaux.'
    },
    {
      id: '3',
      nom: 'NDIAYE',
      prenom: 'Amadou',
      poste: 'Directeur de l\'Urbanisme',
      service: 'Urbanisme',
      telephone: '33 8 XX XX XX XX',
      email: 'amadou.ndiaye@sicap-liberte.sn',
      biographie: 'Architecte de formation, M. Amadou NDIAYE supervise l\'aménagement urbain et les projets de construction.'
    },
    {
      id: '4',
      nom: 'FALL',
      prenom: 'Ousmane',
      poste: 'Directeur Financier',
      service: 'Finances',
      telephone: '33 8 XX XX XX XX',
      email: 'ousmane.fall@sicap-liberte.sn',
      biographie: 'Expert-comptable, M. Ousmane FALL gère les finances communales et optimise les ressources budgétaires.'
    }
  ];

  horairesOuverture: HorairesOuverture[] = [
    { jour: 'Lundi', matin: '8h00 - 12h00', apres_midi: '14h00 - 16h00', ferme: false },
    { jour: 'Mardi', matin: '8h00 - 12h00', apres_midi: '14h00 - 16h00', ferme: false },
    { jour: 'Mercredi', matin: '8h00 - 12h00', apres_midi: '14h00 - 16h00', ferme: false },
    { jour: 'Jeudi', matin: '8h00 - 12h00', apres_midi: '14h00 - 16h00', ferme: false },
    { jour: 'Vendredi', matin: '8h00 - 12h00', apres_midi: '14h00 - 16h00', ferme: false },
    { jour: 'Samedi', matin: 'Fermé', apres_midi: 'Fermé', ferme: true },
    { jour: 'Dimanche', matin: 'Fermé', apres_midi: 'Fermé', ferme: true }
  ];

  // Variables d'état
  ongletActif: string = 'contact';
  serviceSelectionne: ServiceContact | null = null;
  personnelSelectionne: PersonnelMairie | null = null;
  messageEnvoye: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: [''],
      service: ['accueil', Validators.required],
      sujet: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(20)]],
      accepteConditions: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
  }

  // Méthodes de navigation
  changerOnglet(onglet: string): void {
    this.ongletActif = onglet;
  }

  // Méthodes pour les services
  ouvrirService(service: ServiceContact): void {
    this.serviceSelectionne = service;
  }

  fermerService(): void {
    this.serviceSelectionne = null;
  }

  // Méthodes pour le personnel
  ouvrirPersonnel(personnel: PersonnelMairie): void {
    this.personnelSelectionne = personnel;
  }

  fermerPersonnel(): void {
    this.personnelSelectionne = null;
  }

  // Méthodes pour le formulaire de contact
  envoyerMessage(): void {
    if (this.contactForm.valid) {
      const nouveauMessage: MessageContact = {
        id: Date.now().toString(),
        ...this.contactForm.value,
        dateEnvoi: new Date(),
        statut: 'nouveau'
      };

      // Simulation de l'envoi
      console.log('Message envoyé:', nouveauMessage);
      
      this.messageEnvoye = true;
      this.contactForm.reset();
      this.contactForm.patchValue({ service: 'accueil' });

      // Masquer le message de confirmation après 5 secondes
      setTimeout(() => {
        this.messageEnvoye = false;
      }, 5000);
    }
  }

  // Méthodes utilitaires
  getServiceParId(serviceId: string): ServiceContact | undefined {
    return this.servicesContact.find(s => s.id === serviceId);
  }

  estOuvertAujourdhui(): boolean {
    const aujourdhui = new Date().getDay();
    const joursOuvres = [1, 2, 3, 4, 5]; // Lundi à Vendredi
    return joursOuvres.includes(aujourdhui);
  }

  getHeureActuelle(): string {
    return new Date().toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }

  getJourActuel(): string {
    const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return jours[new Date().getDay()];
  }

  getHorairesJour(jour: string): HorairesOuverture | undefined {
    return this.horairesOuverture.find(h => h.jour === jour);
  }

  // Méthodes de contact direct
  appelTelephone(numero: string): void {
    window.open(`tel:${numero}`, '_self');
  }

  envoyerEmail(email: string, sujet?: string): void {
    const subject = sujet ? `?subject=${encodeURIComponent(sujet)}` : '';
    window.open(`mailto:${email}${subject}`, '_self');
  }

  ouvrirPlan(): void {
    // Coordonnées fictives pour Sicap Liberté
    const latitude = 14.7167;
    const longitude = -17.4677;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  }

  partagerContact(service: ServiceContact): void {
    if (navigator.share) {
      navigator.share({
        title: `Contact ${service.nom}`,
        text: `${service.description}\nTél: ${service.telephone}\nEmail: ${service.email}`,
        url: window.location.href
      });
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
      const texte = `Contact ${service.nom}\n${service.description}\nTél: ${service.telephone}\nEmail: ${service.email}`;
      navigator.clipboard.writeText(texte).then(() => {
        console.log('Informations de contact copiées dans le presse-papiers');
      });
    }
  }

  // Validation personnalisée
  get nomInvalide(): boolean {
    const nom = this.contactForm.get('nom');
    return !!(nom && nom.invalid && nom.touched);
  }

  get emailInvalide(): boolean {
    const email = this.contactForm.get('email');
    return !!(email && email.invalid && email.touched);
  }

  get sujetInvalide(): boolean {
    const sujet = this.contactForm.get('sujet');
    return !!(sujet && sujet.invalid && sujet.touched);
  }

  get messageInvalide(): boolean {
    const message = this.contactForm.get('message');
    return !!(message && message.invalid && message.touched);
  }

  get conditionsInvalides(): boolean {
    const conditions = this.contactForm.get('accepteConditions');
    return !!(conditions && conditions.invalid && conditions.touched);
  }

  // Méthodes d'accessibilité
  annonceStatutFormulaire(): string {
    if (this.contactForm.valid) {
      return 'Formulaire valide, prêt à être envoyé';
    } else {
      const erreurs = [];
      if (this.nomInvalide) erreurs.push('nom');
      if (this.emailInvalide) erreurs.push('email');
      if (this.sujetInvalide) erreurs.push('sujet');
      if (this.messageInvalide) erreurs.push('message');
      if (this.conditionsInvalides) erreurs.push('conditions');
      
      return `Formulaire invalide. Erreurs dans les champs: ${erreurs.join(', ')}`;
    }
  }
}
