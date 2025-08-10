import { Component, OnInit } from '@angular/core';

interface CitizenRequest {
  id: number;
  type: string;
  title: string;
  description: string;
  citizenName: string;
  citizenEmail: string;
  citizenPhone: string;
  status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  documents: string[];
  notes: string[];
}

@Component({
  selector: 'app-citizen-requests',
  templateUrl: './citizen-requests.component.html',
  styleUrls: ['./citizen-requests.component.scss']
})
export class CitizenRequestsComponent implements OnInit {
getPendingRequests(): CitizenRequest[] {
  return this.requests.filter(r => r.status === 'pending');
}

getInProgressRequests(): CitizenRequest[] {
  return this.requests.filter(r => r.status === 'in_progress');
}

getCompletedRequests(): CitizenRequest[] {
  return this.requests.filter(r => r.status === 'completed');
}

getUrgentRequests(): CitizenRequest[] {
  return this.requests.filter(r => r.priority === 'urgent');
}
  requests: CitizenRequest[] = [
    {
      id: 1,
      type: 'Certificat de résidence',
      title: 'Demande de certificat de résidence',
      description: 'J\'ai besoin d\'un certificat de résidence pour mon dossier de visa.',
      citizenName: 'Aminata Diop',
      citizenEmail: 'aminata.diop@email.com',
      citizenPhone: '+221 77 123 4567',
      status: 'pending',
      priority: 'medium',
      createdAt: new Date('2024-08-08'),
      updatedAt: new Date('2024-08-08'),
      documents: ['carte_identite.pdf', 'facture_electricite.pdf'],
      notes: []
    },
    {
      id: 2,
      type: 'Réclamation',
      title: 'Problème d\'éclairage public',
      description: 'Les lampadaires de la rue Cheikh Anta Diop ne fonctionnent plus depuis une semaine.',
      citizenName: 'Moussa Ba',
      citizenEmail: 'moussa.ba@email.com',
      citizenPhone: '+221 76 987 6543',
      status: 'in_progress',
      priority: 'high',
      assignedTo: 'Service Technique',
      createdAt: new Date('2024-08-05'),
      updatedAt: new Date('2024-08-07'),
      documents: ['photo_lampadaire.jpg'],
      notes: ['Équipe technique dépêchée sur place', 'Commande de nouvelles ampoules en cours']
    },
    {
      id: 3,
      type: 'Permis de construire',
      title: 'Demande de permis de construire',
      description: 'Demande de permis pour construction d\'une maison R+1.',
      citizenName: 'Fatou Sall',
      citizenEmail: 'fatou.sall@email.com',
      citizenPhone: '+221 78 456 7890',
      status: 'completed',
      priority: 'low',
      assignedTo: 'Service Urbanisme',
      createdAt: new Date('2024-07-15'),
      updatedAt: new Date('2024-08-01'),
      completedAt: new Date('2024-08-01'),
      documents: ['plan_construction.pdf', 'titre_propriete.pdf'],
      notes: ['Dossier complet', 'Permis accordé']
    }
  ];

  filteredRequests: CitizenRequest[] = [];
  searchTerm = '';
  selectedType = '';
  selectedStatus = '';
  selectedPriority = '';
  showRequestModal = false;
  selectedRequest: CitizenRequest | null = null;
  newNote = '';

  requestTypes = [
    'Certificat de résidence',
    'Certificat de naissance',
    'Permis de construire',
    'Réclamation',
    'Demande d\'information',
    'Autre'
  ];

  agents = [
    'Service État Civil',
    'Service Urbanisme',
    'Service Technique',
    'Service Social',
    'Service Finances'
  ];

  constructor() { }

  ngOnInit(): void {
    this.filteredRequests = [...this.requests];
  }

  filterRequests(): void {
    this.filteredRequests = this.requests.filter(request => {
      const matchesSearch = !this.searchTerm || 
        request.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        request.citizenName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        request.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesType = !this.selectedType || request.type === this.selectedType;
      const matchesStatus = !this.selectedStatus || request.status === this.selectedStatus;
      const matchesPriority = !this.selectedPriority || request.priority === this.selectedPriority;

      return matchesSearch && matchesType && matchesStatus && matchesPriority;
    });
  }

  openRequestModal(request: CitizenRequest): void {
    this.selectedRequest = { ...request };
    this.showRequestModal = true;
  }

  closeRequestModal(): void {
    this.showRequestModal = false;
    this.selectedRequest = null;
    this.newNote = '';
  }

  updateRequestStatus(status: string): void {
    if (this.selectedRequest) {
      this.selectedRequest.status = status as any;
      this.selectedRequest.updatedAt = new Date();
      
      if (status === 'completed') {
        this.selectedRequest.completedAt = new Date();
      }
      
      this.updateRequest();
    }
  }

  assignRequest(agent: string): void {
    if (this.selectedRequest) {
      this.selectedRequest.assignedTo = agent;
      this.selectedRequest.updatedAt = new Date();
      this.updateRequest();
    }
  }

  updatePriority(priority: string): void {
    if (this.selectedRequest) {
      this.selectedRequest.priority = priority as any;
      this.selectedRequest.updatedAt = new Date();
      this.updateRequest();
    }
  }

  addNote(): void {
    if (this.selectedRequest && this.newNote.trim()) {
      const note = `${new Date().toLocaleString('fr-FR')}: ${this.newNote.trim()}`;
      this.selectedRequest.notes.push(note);
      this.selectedRequest.updatedAt = new Date();
      this.newNote = '';
      this.updateRequest();
    }
  }

  updateRequest(): void {
    if (this.selectedRequest) {
      const index = this.requests.findIndex(r => r.id === this.selectedRequest!.id);
      if (index !== -1) {
        this.requests[index] = { ...this.selectedRequest };
        this.filterRequests();
      }
    }
  }

  deleteRequest(requestId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette demande ?')) {
      this.requests = this.requests.filter(r => r.id !== requestId);
      this.filterRequests();
    }
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'pending': '#f39c12',
      'in_progress': '#3498db',
      'completed': '#27ae60',
      'rejected': '#e74c3c'
    };
    return colors[status] || '#95a5a6';
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'pending': 'En attente',
      'in_progress': 'En cours',
      'completed': 'Terminé',
      'rejected': 'Rejeté'
    };
    return labels[status] || status;
  }

  getPriorityColor(priority: string): string {
    const colors: { [key: string]: string } = {
      'low': '#95a5a6',
      'medium': '#f39c12',
      'high': '#e67e22',
      'urgent': '#e74c3c'
    };
    return colors[priority] || '#95a5a6';
  }

  getPriorityLabel(priority: string): string {
    const labels: { [key: string]: string } = {
      'low': 'Faible',
      'medium': 'Moyenne',
      'high': 'Élevée',
      'urgent': 'Urgente'
    };
    return labels[priority] || priority;
  }

  formatTimeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor(diffMs / (1000 * 60));

    if (diffDays > 0) return `Il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`;
    if (diffHours > 0) return `Il y a ${diffHours}h`;
    if (diffMins > 0) return `Il y a ${diffMins} min`;
    return 'À l\'instant';
  }

  exportRequests(): void {
    // Logique d'export
    console.log('Export des demandes...');
  }
}
