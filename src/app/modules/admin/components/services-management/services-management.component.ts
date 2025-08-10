import { Component, OnInit } from '@angular/core';

interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  isOnline: boolean;
  isActive: boolean;
  url?: string;
  documents: string[];
  requirements: string[];
  processingTime: string;
  cost: number;
  createdAt: Date;
  updatedAt: Date;
}

@Component({
  selector: 'app-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.scss']
})
export class ServicesManagementComponent implements OnInit {

  services: Service[] = [
    {
      id: 1,
      name: 'Certificat de résidence',
      description: 'Demande de certificat attestant de votre résidence dans la commune',
      category: 'État civil',
      isOnline: true,
      isActive: true,
      url: '/services/certificat-residence',
      documents: ['Carte d\'identité', 'Justificatif de domicile'],
      requirements: ['Être résident de la commune', 'Présenter une pièce d\'identité'],
      processingTime: '2-3 jours ouvrables',
      cost: 1000,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-08-01')
    },
    {
      id: 2,
      name: 'Permis de construire',
      description: 'Autorisation pour la construction d\'un bâtiment',
      category: 'Urbanisme',
      isOnline: false,
      isActive: true,
      documents: ['Plan de construction', 'Titre de propriété', 'Étude d\'impact'],
      requirements: ['Propriétaire du terrain', 'Respect des normes d\'urbanisme'],
      processingTime: '2-3 mois',
      cost: 50000,
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-07-15')
    },
    {
      id: 3,
      name: 'Paiement des taxes',
      description: 'Service de paiement en ligne des taxes municipales',
      category: 'Finances',
      isOnline: true,
      isActive: true,
      url: '/services/paiement-taxes',
      documents: ['Avis d\'imposition'],
      requirements: ['Être contribuable'],
      processingTime: 'Immédiat',
      cost: 0,
      createdAt: new Date('2024-03-10'),
      updatedAt: new Date('2024-08-05')
    }
  ];

  filteredServices: Service[] = [];
  searchTerm = '';
  selectedCategory = '';
  selectedStatus = '';
  showAddServiceModal = false;
  showEditServiceModal = false;
  selectedService: Service | null = null;

  newService: Partial<Service> = {
    name: '',
    description: '',
    category: '',
    isOnline: false,
    isActive: true,
    documents: [],
    requirements: [],
    processingTime: '',
    cost: 0
  };

  categories = [
    'État civil',
    'Urbanisme',
    'Finances',
    'Social',
    'Environnement',
    'Culture et Sport',
    'Sécurité'
  ];

  constructor() { }

  ngOnInit(): void {
    this.filteredServices = [...this.services];
  }

  filterServices(): void {
    this.filteredServices = this.services.filter(service => {
      const matchesSearch = !this.searchTerm || 
        service.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = !this.selectedCategory || service.category === this.selectedCategory;
      
      let matchesStatus = true;
      if (this.selectedStatus === 'active') {
        matchesStatus = service.isActive;
      } else if (this.selectedStatus === 'inactive') {
        matchesStatus = !service.isActive;
      } else if (this.selectedStatus === 'online') {
        matchesStatus = service.isOnline;
      } else if (this.selectedStatus === 'offline') {
        matchesStatus = !service.isOnline;
      }

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }

  openAddServiceModal(): void {
    this.newService = {
      name: '',
      description: '',
      category: '',
      isOnline: false,
      isActive: true,
      documents: [],
      requirements: [],
      processingTime: '',
      cost: 0
    };
    this.showAddServiceModal = true;
  }

  closeAddServiceModal(): void {
    this.showAddServiceModal = false;
  }

  openEditServiceModal(service: Service): void {
    this.selectedService = { ...service };
    this.showEditServiceModal = true;
  }

  closeEditServiceModal(): void {
    this.showEditServiceModal = false;
    this.selectedService = null;
  }

  addService(): void {
    if (this.newService.name && this.newService.description) {
      const service: Service = {
        id: Math.max(...this.services.map(s => s.id)) + 1,
        name: this.newService.name!,
        description: this.newService.description!,
        category: this.newService.category || 'État civil',
        isOnline: this.newService.isOnline || false,
        isActive: this.newService.isActive !== false,
        documents: this.newService.documents || [],
        requirements: this.newService.requirements || [],
        processingTime: this.newService.processingTime || '',
        cost: this.newService.cost || 0,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      if (service.isOnline && this.newService.url) {
        service.url = this.newService.url;
      }

      this.services.push(service);
      this.filterServices();
      this.closeAddServiceModal();
    }
  }

  updateService(): void {
    if (this.selectedService) {
      const index = this.services.findIndex(s => s.id === this.selectedService!.id);
      if (index !== -1) {
        this.selectedService.updatedAt = new Date();
        this.services[index] = { ...this.selectedService };
        this.filterServices();
        this.closeEditServiceModal();
      }
    }
  }

  deleteService(serviceId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce service ?')) {
      this.services = this.services.filter(s => s.id !== serviceId);
      this.filterServices();
    }
  }

  toggleServiceStatus(service: Service): void {
    const index = this.services.findIndex(s => s.id === service.id);
    if (index !== -1) {
      this.services[index].isActive = !this.services[index].isActive;
      this.services[index].updatedAt = new Date();
      this.filterServices();
    }
  }

  toggleOnlineStatus(service: Service): void {
    const index = this.services.findIndex(s => s.id === service.id);
    if (index !== -1) {
      this.services[index].isOnline = !this.services[index].isOnline;
      this.services[index].updatedAt = new Date();
      this.filterServices();
    }
  }

  formatCost(cost: number): string {
    return new Intl.NumberFormat('fr-SN', {
      style: 'currency',
      currency: 'XOF'
    }).format(cost);
  }

  addDocument(event: any, isEdit: boolean = false): void {
    const input = event.target;
    const value = input.value.trim();
    
    if (event.key === 'Enter' && value) {
      if (isEdit && this.selectedService) {
        if (!this.selectedService.documents.includes(value)) {
          this.selectedService.documents.push(value);
        }
      } else if (this.newService.documents) {
        if (!this.newService.documents.includes(value)) {
          this.newService.documents.push(value);
        }
      }
      input.value = '';
      event.preventDefault();
    }
  }

  removeDocument(document: string, isEdit: boolean = false): void {
    if (isEdit && this.selectedService) {
      this.selectedService.documents = this.selectedService.documents.filter(d => d !== document);
    } else if (this.newService.documents) {
      this.newService.documents = this.newService.documents.filter(d => d !== document);
    }
  }

  addRequirement(event: any, isEdit: boolean = false): void {
    const input = event.target;
    const value = input.value.trim();
    
    if (event.key === 'Enter' && value) {
      if (isEdit && this.selectedService) {
        if (!this.selectedService.requirements.includes(value)) {
          this.selectedService.requirements.push(value);
        }
      } else if (this.newService.requirements) {
        if (!this.newService.requirements.includes(value)) {
          this.newService.requirements.push(value);
        }
      }
      input.value = '';
      event.preventDefault();
    }
  }

  removeRequirement(requirement: string, isEdit: boolean = false): void {
    if (isEdit && this.selectedService) {
      this.selectedService.requirements = this.selectedService.requirements.filter(r => r !== requirement);
    } else if (this.newService.requirements) {
      this.newService.requirements = this.newService.requirements.filter(r => r !== requirement);
    }
  }
}
