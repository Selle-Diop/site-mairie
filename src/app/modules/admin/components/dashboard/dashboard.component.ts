import { Component, OnInit } from '@angular/core';

interface StatCard {
  title: string;
  value: number;
  icon: string;
  color: string;
  trend: number;
}

interface RecentActivity {
  id: number;
  type: string;
  description: string;
  timestamp: Date;
  user: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  stats: StatCard[] = [
    {
      title: 'Utilisateurs actifs',
      value: 1247,
      icon: 'people',
      color: '#4CAF50',
      trend: 12
    },
    {
      title: 'Demandes en cours',
      value: 89,
      icon: 'pending_actions',
      color: '#FF9800',
      trend: -5
    },
    {
      title: 'Services disponibles',
      value: 24,
      icon: 'business_center',
      color: '#2196F3',
      trend: 8
    },
    {
      title: 'Articles publiés',
      value: 156,
      icon: 'article',
      color: '#9C27B0',
      trend: 15
    }
  ];

  recentActivities: RecentActivity[] = [
    {
      id: 1,
      type: 'user',
      description: 'Nouvel utilisateur inscrit',
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      user: 'Système'
    },
    {
      id: 2,
      type: 'content',
      description: 'Article "Nouvelle réglementation" publié',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      user: 'Admin Contenu'
    },
    {
      id: 3,
      type: 'request',
      description: 'Demande de certificat de résidence traitée',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      user: 'Agent Municipal'
    },
    {
      id: 4,
      type: 'service',
      description: 'Service "Paiement en ligne" mis à jour',
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      user: 'Admin Technique'
    },
    {
      id: 5,
      type: 'user',
      description: 'Utilisateur "Marie Diop" suspendu',
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      user: 'Modérateur'
    }
  ];

  chartData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Demandes traitées',
        data: [65, 78, 90, 81, 96, 105],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)'
      },
      {
        label: 'Nouvelles inscriptions',
        data: [28, 35, 42, 48, 52, 61],
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.1)'
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  getActivityIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'user': 'person_add',
      'content': 'article',
      'request': 'assignment',
      'service': 'business_center'
    };
    return icons[type] || 'info';
  }

  getActivityColor(type: string): string {
    const colors: { [key: string]: string } = {
      'user': '#4CAF50',
      'content': '#9C27B0',
      'request': '#FF9800',
      'service': '#2196F3'
    };
    return colors[type] || '#666';
  }

  formatTimeAgo(timestamp: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMins / 60);

    if (diffMins < 1) return 'À l\'instant';
    if (diffMins < 60) return `Il y a ${diffMins} min`;
    if (diffHours < 24) return `Il y a ${diffHours}h`;
    return timestamp.toLocaleDateString('fr-FR');
  }
}
