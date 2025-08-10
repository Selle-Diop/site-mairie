import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  workingHours: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  maintenance: {
    enabled: boolean;
    message: string;
  };
  notifications: {
    emailNotifications: boolean;
    smsNotifications: boolean;
    pushNotifications: boolean;
  };
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @ViewChild('importFile') importFileInput!: ElementRef;
   triggerFileInput(): void {
    this.importFileInput.nativeElement.click();
  }
  settings: SiteSettings = {
    siteName: 'Mairie de Sicap Liberté',
    siteDescription: 'Site officiel de la commune de Sicap Liberté',
    contactEmail: 'contact@mairie-sicap-liberte.sn',
    contactPhone: '+221 33 123 45 67',
    address: 'Avenue Cheikh Anta Diop, Sicap Liberté, Dakar',
    workingHours: 'Lundi - Vendredi: 8h00 - 17h00',
    socialMedia: {
      facebook: 'https://facebook.com/mairie-sicap-liberte',
      twitter: 'https://twitter.com/mairie_sicap',
      instagram: 'https://instagram.com/mairie_sicap_liberte'
    },
    maintenance: {
      enabled: false,
      message: 'Le site est temporairement en maintenance. Veuillez réessayer plus tard.'
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true
    }
  };

  activeTab = 'general';
  isSaving = false;

  constructor() { }

  ngOnInit(): void {
    this.loadSettings();
  }

  loadSettings(): void {
    // Charger les paramètres depuis l'API ou le localStorage
    const savedSettings = localStorage.getItem('siteSettings');
    if (savedSettings) {
      this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
    }
  }

  saveSettings(): void {
    this.isSaving = true;
    
    // Simuler une sauvegarde
    setTimeout(() => {
      localStorage.setItem('siteSettings', JSON.stringify(this.settings));
      this.isSaving = false;
      alert('Paramètres sauvegardés avec succès !');
    }, 1000);
  }

  resetSettings(): void {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser tous les paramètres ?')) {
      localStorage.removeItem('siteSettings');
      this.loadSettings();
      alert('Paramètres réinitialisés !');
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  toggleMaintenance(): void {
    this.settings.maintenance.enabled = !this.settings.maintenance.enabled;
    if (this.settings.maintenance.enabled) {
      alert('Mode maintenance activé. Le site sera inaccessible aux visiteurs.');
    } else {
      alert('Mode maintenance désactivé. Le site est maintenant accessible.');
    }
  }

  exportSettings(): void {
    const dataStr = JSON.stringify(this.settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'site-settings.json';
    link.click();
    
    URL.revokeObjectURL(url);
  }

  importSettings(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedSettings = JSON.parse(e.target?.result as string);
          this.settings = { ...this.settings, ...importedSettings };
          alert('Paramètres importés avec succès !');
        } catch (error) {
          alert('Erreur lors de l\'importation du fichier.');
        }
      };
      reader.readAsText(file);
    }
  }

  clearCache(): void {
    if (confirm('Êtes-vous sûr de vouloir vider le cache ?')) {
      // Logique pour vider le cache
      localStorage.clear();
      sessionStorage.clear();
      alert('Cache vidé avec succès !');
    }
  }

  generateBackup(): void {
    // Logique pour générer une sauvegarde complète
    const backup = {
      settings: this.settings,
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    };
    
    const dataStr = JSON.stringify(backup, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    alert('Sauvegarde générée avec succès !');
  }
}
