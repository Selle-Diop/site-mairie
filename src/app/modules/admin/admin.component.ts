import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sidebarCollapsed = false;
  currentUser = {
    name: 'Administrateur',
    role: 'Super Admin',
    avatar: 'assets/images/admin-avatar.png'
  };

  menuItems = [
    { 
      icon: 'dashboard', 
      label: 'Tableau de bord', 
      route: '/admin/dashboard',
      active: true 
    },
    { 
      icon: 'people', 
      label: 'Utilisateurs', 
      route: '/admin/users',
      active: false 
    },
    { 
      icon: 'article', 
      label: 'Contenu', 
      route: '/admin/content',
      active: false 
    },
    { 
      icon: 'business', 
      label: 'Services', 
      route: '/admin/services',
      active: false 
    },
    { 
      icon: 'mail', 
      label: 'Demandes citoyens', 
      route: '/admin/requests',
      active: false 
    },
    { 
      icon: 'settings', 
      label: 'Paramètres', 
      route: '/admin/settings',
      active: false 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  setActiveMenuItem(route: string): void {
    this.menuItems.forEach(item => {
      item.active = item.route === route;
    });
  }

  logout(): void {
    // Logique de déconnexion
    console.log('Déconnexion...');
  }
}
