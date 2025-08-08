import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-services-en-ligne',
  templateUrl: './services-en-ligne.component.html',
  styleUrls: ['./services-en-ligne.component.scss']
})
export class ServicesEnLigneComponent implements OnInit {
  
  // Formulaires
  demandeActeForm!: FormGroup;
  rendezVousForm!: FormGroup;
  suiviDossierForm!: FormGroup;

  // Services disponibles
  servicesDisponibles = [
    {
      id: 'acte-naissance',
      titre: 'Acte de naissance',
      description: 'Demande d\'extrait d\'acte de naissance',
      icon: 'fas fa-baby',
      delai: '48h',
      prix: '1000 FCFA'
    },
    {
      id: 'acte-mariage',
      titre: 'Acte de mariage',
      description: 'Demande d\'extrait d\'acte de mariage',
      icon: 'fas fa-heart',
      delai: '48h',
      prix: '1500 FCFA'
    },
    {
      id: 'acte-deces',
      titre: 'Acte de décès',
      description: 'Demande d\'extrait d\'acte de décès',
      icon: 'fas fa-cross',
      delai: '24h',
      prix: '1000 FCFA'
    },
    {
      id: 'certificat-residence',
      titre: 'Certificat de résidence',
      description: 'Attestation de domicile',
      icon: 'fas fa-home',
      delai: '24h',
      prix: '500 FCFA'
    },
    {
      id: 'permis-construire',
      titre: 'Permis de construire',
      description: 'Demande d\'autorisation de construction',
      icon: 'fas fa-building',
      delai: '30 jours',
      prix: 'Variable'
    },
    {
      id: 'certificat-vie',
      titre: 'Certificat de vie',
      description: 'Attestation de vie',
      icon: 'fas fa-user-check',
      delai: '24h',
      prix: '500 FCFA'
    }
  ];

  // Types de rendez-vous
  typesRendezVous = [
    { id: 'etat-civil', nom: 'État civil', duree: '30 min' },
    { id: 'urbanisme', nom: 'Urbanisme', duree: '45 min' },
    { id: 'social', nom: 'Service social', duree: '30 min' },
    { id: 'maire', nom: 'Audience avec le Maire', duree: '20 min' },
    { id: 'technique', nom: 'Service technique', duree: '30 min' }
  ];

  // Créneaux disponibles (simulation)
  creneauxDisponibles = [
    { date: '2024-01-22', heures: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
    { date: '2024-01-23', heures: ['09:00', '09:30', '10:30', '14:30', '16:00'] },
    { date: '2024-01-24', heures: ['08:30', '10:00', '11:30', '14:00', '15:30'] }
  ];

  // État des formulaires
  activeTab = 'demande-acte';
  serviceSelectionne = '';
  showConfirmation = false;
  confirmationMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForms();
  }

  initForms() {
    // Formulaire demande d'acte
    this.demandeActeForm = this.fb.group({
      typeActe: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      lieuNaissance: ['', Validators.required],
      nomPere: [''],
      nomMere: [''],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      nombreCopies: [1, [Validators.required, Validators.min(1), Validators.max(10)]]
    });

    // Formulaire rendez-vous
    this.rendezVousForm = this.fb.group({
      typeRendezVous: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      dateRendezVous: ['', Validators.required],
      heureRendezVous: ['', Validators.required],
      motif: ['', Validators.required]
    });

    // Formulaire suivi de dossier
    this.suiviDossierForm = this.fb.group({
      numeroDossier: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Sélectionner un service
  selectionnerService(serviceId: string) {
    this.serviceSelectionne = serviceId;
    this.demandeActeForm.patchValue({ typeActe: serviceId });
  }

  // Soumettre demande d'acte
  soumettreDemandeActe() {
    if (this.demandeActeForm.valid) {
      // Simulation de l'envoi
      console.log('Demande d\'acte:', this.demandeActeForm.value);
      this.showConfirmation = true;
      this.confirmationMessage = 'Votre demande d\'acte a été enregistrée. Vous recevrez un email de confirmation avec le numéro de suivi.';
      this.demandeActeForm.reset();
      this.serviceSelectionne = '';
    }
  }

  // Soumettre demande de rendez-vous
  soumettreRendezVous() {
    if (this.rendezVousForm.valid) {
      // Simulation de l'envoi
      console.log('Rendez-vous:', this.rendezVousForm.value);
      this.showConfirmation = true;
      this.confirmationMessage = 'Votre rendez-vous a été confirmé. Vous recevrez un email de rappel 24h avant.';
      this.rendezVousForm.reset();
    }
  }

  // Suivre un dossier
  suivreDossier() {
    if (this.suiviDossierForm.valid) {
      // Simulation de la recherche
      console.log('Suivi dossier:', this.suiviDossierForm.value);
      this.showConfirmation = true;
      this.confirmationMessage = 'Dossier trouvé ! Statut: En cours de traitement. Délai estimé: 2-3 jours ouvrables.';
    }
  }

  // Changer d'onglet
  changerOnglet(tab: string) {
    this.activeTab = tab;
    this.showConfirmation = false;
  }

  // Fermer la confirmation
  fermerConfirmation() {
    this.showConfirmation = false;
  }

  // Obtenir les heures disponibles pour une date
  getHeuresDisponibles(date: string): string[] {
    const creneau = this.creneauxDisponibles.find(c => c.date === date);
    return creneau ? creneau.heures : [];
  }
}
