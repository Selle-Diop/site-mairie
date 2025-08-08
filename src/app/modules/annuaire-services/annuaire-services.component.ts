import { Component } from '@angular/core';

@Component({
  selector: 'app-annuaire-services',
  templateUrl: './annuaire-services.component.html',
  styleUrls: ['./annuaire-services.component.scss']
})
export class AnnuaireServicesComponent {
  
  // Services municipaux avec détails complets
  servicesMunicipaux = [
    {
      id: 'etat-civil',
      nom: 'Service d\'État Civil',
      description: 'Délivrance d\'actes d\'état civil, légalisations, certifications',
      responsable: 'Mme Fatou NDIAYE',
      telephone: '+221 33 XXX XX 01',
      email: 'etatcivil@mairie-sicapliberte.sn',
      bureau: 'Bureau 101 - Rez-de-chaussée',
      horaires: {
        lundi: '8h00 - 17h00',
        mardi: '8h00 - 17h00',
        mercredi: '8h00 - 17h00',
        jeudi: '8h00 - 17h00',
        vendredi: '8h00 - 17h00',
        samedi: 'Fermé',
        dimanche: 'Fermé'
      },
      services: [
        'Actes de naissance',
        'Actes de mariage',
        'Actes de décès',
        'Certificats de vie',
        'Légalisations de signatures',
        'Copies conformes'
      ],
      documents: [
        'Pièce d\'identité valide',
        'Justificatif de domicile',
        'Acte à légaliser (si applicable)'
      ],
      tarifs: [
        { service: 'Acte de naissance', prix: '1000 FCFA' },
        { service: 'Acte de mariage', prix: '1500 FCFA' },
        { service: 'Acte de décès', prix: '1000 FCFA' },
        { service: 'Certificat de vie', prix: '500 FCFA' }
      ],
      icon: 'fas fa-file-alt',
      couleur: '#3498db'
    },
    {
      id: 'urbanisme',
      nom: 'Service d\'Urbanisme',
      description: 'Permis de construire, autorisations d\'urbanisme, plans d\'occupation des sols',
      responsable: 'M. Ibrahima SARR',
      telephone: '+221 33 XXX XX 02',
      email: 'urbanisme@mairie-sicapliberte.sn',
      bureau: 'Bureau 201 - 1er étage',
      horaires: {
        lundi: '8h00 - 16h00',
        mardi: '8h00 - 16h00',
        mercredi: '8h00 - 16h00',
        jeudi: '8h00 - 16h00',
        vendredi: '8h00 - 16h00',
        samedi: 'Fermé',
        dimanche: 'Fermé'
      },
      services: [
        'Permis de construire',
        'Déclaration de travaux',
        'Certificat d\'urbanisme',
        'Plans d\'alignement',
        'Autorisations de voirie',
        'Numérotage des parcelles'
      ],
      documents: [
        'Plan de situation',
        'Plan de masse',
        'Plan des façades',
        'Notice descriptive',
        'Titre de propriété'
      ],
      tarifs: [
        { service: 'Permis de construire', prix: 'Variable selon surface' },
        { service: 'Déclaration de travaux', prix: '5000 FCFA' },
        { service: 'Certificat d\'urbanisme', prix: '2000 FCFA' }
      ],
      icon: 'fas fa-building',
      couleur: '#e74c3c'
    },
    {
      id: 'technique',
      nom: 'Service Technique',
      description: 'Voirie, éclairage public, espaces verts, assainissement',
      responsable: 'M. Cheikh FALL',
      telephone: '+221 33 XXX XX 03',
      email: 'technique@mairie-sicapliberte.sn',
      bureau: 'Bureau 102 - Rez-de-chaussée',
      horaires: {
        lundi: '7h30 - 16h30',
        mardi: '7h30 - 16h30',
        mercredi: '7h30 - 16h30',
        jeudi: '7h30 - 16h30',
        vendredi: '7h30 - 16h30',
        samedi: 'Urgences uniquement',
        dimanche: 'Urgences uniquement'
      },
      services: [
        'Entretien de la voirie',
        'Éclairage public',
        'Espaces verts',
        'Collecte des déchets',
        'Assainissement',
        'Signalisation routière'
      ],
      documents: [
        'Demande écrite',
        'Plan de localisation',
        'Photos (si nécessaire)'
      ],
      tarifs: [
        { service: 'Intervention technique', prix: 'Gratuit pour les citoyens' },
        { service: 'Branchement eau', prix: '15000 FCFA' },
        { service: 'Raccordement égouts', prix: '25000 FCFA' }
      ],
      icon: 'fas fa-tools',
      couleur: '#f39c12'
    },
    {
      id: 'social',
      nom: 'Service Social',
      description: 'Aide sociale, accompagnement des familles, insertion professionnelle',
      responsable: 'Mme Aïssatou BA',
      telephone: '+221 33 XXX XX 04',
      email: 'social@mairie-sicapliberte.sn',
      bureau: 'Bureau 202 - 1er étage',
      horaires: {
        lundi: '8h00 - 17h00',
        mardi: '8h00 - 17h00',
        mercredi: '8h00 - 17h00',
        jeudi: '8h00 - 17h00',
        vendredi: '8h00 - 17h00',
        samedi: 'Fermé',
        dimanche: 'Fermé'
      },
      services: [
        'Aide sociale d\'urgence',
        'Accompagnement des familles',
        'Insertion professionnelle',
        'Aide aux personnes âgées',
        'Soutien aux personnes handicapées',
        'Médiation familiale'
      ],
      documents: [
        'Pièce d\'identité',
        'Justificatifs de revenus',
        'Certificat médical (si applicable)',
        'Justificatif de domicile'
      ],
      tarifs: [
        { service: 'Consultations sociales', prix: 'Gratuit' },
        { service: 'Aide d\'urgence', prix: 'Selon situation' }
      ],
      icon: 'fas fa-hands-helping',
      couleur: '#27ae60'
    },
    {
      id: 'financier',
      nom: 'Service Financier',
      description: 'Gestion budgétaire, comptabilité, recouvrement des taxes',
      responsable: 'M. Ousmane DIOP',
      telephone: '+221 33 XXX XX 05',
      email: 'finances@mairie-sicapliberte.sn',
      bureau: 'Bureau 203 - 1er étage',
      horaires: {
        lundi: '8h00 - 16h00',
        mardi: '8h00 - 16h00',
        mercredi: '8h00 - 16h00',
        jeudi: '8h00 - 16h00',
        vendredi: '8h00 - 16h00',
        samedi: 'Fermé',
        dimanche: 'Fermé'
      },
      services: [
        'Paiement des taxes',
        'Quittances fiscales',
        'Certificats de non-redevance',
        'Renseignements budgétaires',
        'Marchés publics',
        'Subventions'
      ],
      documents: [
        'Pièce d\'identité',
        'Justificatifs de propriété',
        'Anciens reçus de paiement'
      ],
      tarifs: [
        { service: 'Certificat de non-redevance', prix: '1000 FCFA' },
        { service: 'Copie de quittance', prix: '500 FCFA' }
      ],
      icon: 'fas fa-calculator',
      couleur: '#9b59b6'
    },
    {
      id: 'secretariat',
      nom: 'Secrétariat Général',
      description: 'Accueil, orientation, courrier officiel, audiences',
      responsable: 'Mme Mariama KANE',
      telephone: '+221 33 XXX XX 00',
      email: 'secretariat@mairie-sicapliberte.sn',
      bureau: 'Bureau 001 - Accueil principal',
      horaires: {
        lundi: '8h00 - 17h00',
        mardi: '8h00 - 17h00',
        mercredi: '8h00 - 17h00',
        jeudi: '8h00 - 17h00',
        vendredi: '8h00 - 17h00',
        samedi: 'Fermé',
        dimanche: 'Fermé'
      },
      services: [
        'Accueil et orientation',
        'Prise de rendez-vous',
        'Courrier officiel',
        'Audiences avec le Maire',
        'Informations générales',
        'Réclamations'
      ],
      documents: [
        'Pièce d\'identité',
        'Courrier ou demande écrite'
      ],
      tarifs: [
        { service: 'Accueil et orientation', prix: 'Gratuit' },
        { service: 'Rendez-vous Maire', prix: 'Gratuit' }
      ],
      icon: 'fas fa-user-tie',
      couleur: '#34495e'
    }
  ];

  // Services d'urgence
  servicesUrgence = [
    {
      nom: 'Police Municipale',
      telephone: '+221 33 XXX XX 10',
      disponibilite: '24h/24 - 7j/7',
      icon: 'fas fa-shield-alt'
    },
    {
      nom: 'Service Technique (Urgences)',
      telephone: '+221 33 XXX XX 11',
      disponibilite: 'Week-ends et jours fériés',
      icon: 'fas fa-wrench'
    },
    {
      nom: 'Permanence Mairie',
      telephone: '+221 33 XXX XX 12',
      disponibilite: 'Lun-Ven 17h-20h',
      icon: 'fas fa-phone'
    }
  ];

  // Service sélectionné pour affichage détaillé
  serviceSelectionne: any = null;

  // Filtres
  filtreActif = 'tous';
  rechercheTexte = '';

  constructor() { }

  // Sélectionner un service pour affichage détaillé
  selectionnerService(service: any) {
    this.serviceSelectionne = service;
  }

  // Fermer les détails du service
  fermerDetails() {
    this.serviceSelectionne = null;
  }

  // Filtrer les services
  filtrerServices(filtre: string) {
    this.filtreActif = filtre;
  }

  // Obtenir les services filtrés
  get servicesAffiches() {
    let services = this.servicesMunicipaux;

    // Filtrage par recherche texte
    if (this.rechercheTexte) {
      const recherche = this.rechercheTexte.toLowerCase();
      services = services.filter(service => 
        service.nom.toLowerCase().includes(recherche) ||
        service.description.toLowerCase().includes(recherche) ||
        service.services.some(s => s.toLowerCase().includes(recherche))
      );
    }

    return services;
  }

  // Obtenir les horaires d'aujourd'hui
  getHorairesAujourdhui(horaires: any): string {
    const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const aujourdhui = jours[new Date().getDay()];
    return horaires[aujourdhui] || 'Fermé';
  }

  // Vérifier si le service est ouvert maintenant
  estOuvert(horaires: any): boolean {
    const horaireAujourdhui = this.getHorairesAujourdhui(horaires);
    if (horaireAujourdhui === 'Fermé' || horaireAujourdhui.includes('Urgences')) {
      return false;
    }

    const maintenant = new Date();
    const heureActuelle = maintenant.getHours() * 60 + maintenant.getMinutes();
    
    // Parse des horaires (format: "8h00 - 17h00")
    const match = horaireAujourdhui.match(/(\d+)h(\d+)\s*-\s*(\d+)h(\d+)/);
    if (match) {
      const debut = parseInt(match[1]) * 60 + parseInt(match[2]);
      const fin = parseInt(match[3]) * 60 + parseInt(match[4]);
      return heureActuelle >= debut && heureActuelle <= fin;
    }

    return false;
  }
}
