import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'suspended';
  createdAt: Date;
  lastLogin: Date;
  avatar?: string;
}

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      firstName: 'Amadou',
      lastName: 'Diallo',
      email: 'amadou.diallo@mairie.sn',
      role: 'Admin',
      status: 'active',
      createdAt: new Date('2024-01-15'),
      lastLogin: new Date('2024-08-10')
    },
    {
      id: 2,
      firstName: 'Fatou',
      lastName: 'Sall',
      email: 'fatou.sall@mairie.sn',
      role: 'Agent',
      status: 'active',
      createdAt: new Date('2024-02-20'),
      lastLogin: new Date('2024-08-09')
    },
    {
      id: 3,
      firstName: 'Ousmane',
      lastName: 'Ba',
      email: 'ousmane.ba@gmail.com',
      role: 'Citoyen',
      status: 'active',
      createdAt: new Date('2024-03-10'),
      lastLogin: new Date('2024-08-08')
    },
    {
      id: 4,
      firstName: 'Aissatou',
      lastName: 'Ndiaye',
      email: 'aissatou.ndiaye@yahoo.fr',
      role: 'Citoyen',
      status: 'inactive',
      createdAt: new Date('2024-04-05'),
      lastLogin: new Date('2024-07-15')
    },
    {
      id: 5,
      firstName: 'Mamadou',
      lastName: 'Sy',
      email: 'mamadou.sy@mairie.sn',
      role: 'Modérateur',
      status: 'suspended',
      createdAt: new Date('2024-01-30'),
      lastLogin: new Date('2024-06-20')
    }
  ];

  filteredUsers: User[] = [];
  searchTerm = '';
  selectedRole = '';
  selectedStatus = '';
  showAddUserModal = false;
  showEditUserModal = false;
  selectedUser: User | null = null;

  newUser: Partial<User> = {
    firstName: '',
    lastName: '',
    email: '',
    role: 'Citoyen',
    status: 'active'
  };

  roles = [
    { value: 'Admin', label: 'Administrateur' },
    { value: 'Agent', label: 'Agent Municipal' },
    { value: 'Modérateur', label: 'Modérateur' },
    { value: 'Citoyen', label: 'Citoyen' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.filteredUsers = [...this.users];
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = !this.searchTerm || 
        user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesRole = !this.selectedRole || user.role === this.selectedRole;
      const matchesStatus = !this.selectedStatus || user.status === this.selectedStatus;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  openAddUserModal(): void {
    this.newUser = {
      firstName: '',
      lastName: '',
      email: '',
      role: 'Citoyen',
      status: 'active'
    };
    this.showAddUserModal = true;
  }

  closeAddUserModal(): void {
    this.showAddUserModal = false;
  }

  openEditUserModal(user: User): void {
    this.selectedUser = { ...user };
    this.showEditUserModal = true;
  }

  closeEditUserModal(): void {
    this.showEditUserModal = false;
    this.selectedUser = null;
  }

  addUser(): void {
    if (this.newUser.firstName && this.newUser.lastName && this.newUser.email) {
      const user: User = {
        id: Math.max(...this.users.map(u => u.id)) + 1,
        firstName: this.newUser.firstName!,
        lastName: this.newUser.lastName!,
        email: this.newUser.email!,
        role: this.newUser.role || 'Citoyen',
        status: this.newUser.status || 'active',
        createdAt: new Date(),
        lastLogin: new Date()
      };

      this.users.push(user);
      this.filterUsers();
      this.closeAddUserModal();
    }
  }

  updateUser(): void {
    if (this.selectedUser) {
      const index = this.users.findIndex(u => u.id === this.selectedUser!.id);
      if (index !== -1) {
        this.users[index] = { ...this.selectedUser };
        this.filterUsers();
        this.closeEditUserModal();
      }
    }
  }

  deleteUser(userId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.users = this.users.filter(u => u.id !== userId);
      this.filterUsers();
    }
  }

  toggleUserStatus(user: User): void {
    const newStatus = user.status === 'active' ? 'suspended' : 'active';
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index].status = newStatus;
      this.filterUsers();
    }
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'active': '#27ae60',
      'inactive': '#f39c12',
      'suspended': '#e74c3c'
    };
    return colors[status] || '#95a5a6';
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'active': 'Actif',
      'inactive': 'Inactif',
      'suspended': 'Suspendu'
    };
    return labels[status] || status;
  }

  getRoleLabel(role: string): string {
    const roleObj = this.roles.find(r => r.value === role);
    return roleObj ? roleObj.label : role;
  }

  exportUsers(): void {
    // Logique d'export en CSV/Excel
    console.log('Export des utilisateurs...');
  }
}
