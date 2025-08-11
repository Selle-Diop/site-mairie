import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm = {
    email: '',
    password: '',
    rememberMe: false
  };

  isLoading = false;
  showPassword = false;
  errorMessage = '';

  // Comptes de démonstration
  demoAccounts = [
    { email: 'adminmairie.sn', password: 'admin123', role: 'Super Admin' },
    { email: 'agentmairie.sn', password: 'agent123', role: 'Agent Municipal' },
    { email: 'moderateurmairie.sn', password: 'mod123', role: 'Modérateur' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Vérifier si l'utilisateur est déjà connecté
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (isLoggedIn === 'true') {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  onSubmit(): void {
    if (!this.loginForm.email || !this.loginForm.password) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Simuler une authentification
    setTimeout(() => {
      const account = this.demoAccounts.find(
        acc => acc.email === this.loginForm.email && acc.password === this.loginForm.password
      );

      if (account) {
        // Connexion réussie
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUser', JSON.stringify({
          email: account.email,
          role: account.role,
          name: this.getNameFromEmail(account.email)
        }));

        if (this.loginForm.rememberMe) {
          localStorage.setItem('rememberAdmin', 'true');
        }

        this.router.navigate(['/admin/dashboard']);
      } else {
        // Échec de la connexion
        this.errorMessage = 'Email ou mot de passe incorrect.';
      }

      this.isLoading = false;
    }, 1500);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  getNameFromEmail(email: string): string {
    const names: { [key: string]: string } = {
      'admin@mairie.sn': 'Administrateur Principal',
      'agent@mairie.sn': 'Agent Municipal',
      'moderateur@mairie.sn': 'Modérateur'
    };
    return names[email] || 'Utilisateur';
  }

  fillDemoCredentials(accountIndex: number): void {
    const account = this.demoAccounts[accountIndex];
    this.loginForm.email = account.email;
    this.loginForm.password = account.password;
    this.errorMessage = '';
  }

  forgotPassword(): void {
    if (!this.loginForm.email) {
      this.errorMessage = 'Veuillez saisir votre email pour réinitialiser le mot de passe.';
      return;
    }

    alert(`Un email de réinitialisation a été envoyé à ${this.loginForm.email}`);
  }
}
