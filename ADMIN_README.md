# Interface d'Administration - Mairie de Sicap Liberté

## Vue d'ensemble

L'interface d'administration est une application web complète développée avec Angular 16 qui permet aux administrateurs de la mairie de gérer efficacement tous les aspects du site web municipal.

## Fonctionnalités principales

### 🏠 **Tableau de bord**
- Vue d'ensemble des statistiques clés
- Graphiques de performance
- Activités récentes
- Actions rapides

### 👥 **Gestion des utilisateurs**
- Création, modification et suppression d'utilisateurs
- Gestion des rôles (Admin, Agent, Modérateur, Citoyen)
- Activation/désactivation des comptes
- Filtrage et recherche avancée

### 📝 **Gestion du contenu**
- Création et édition d'articles
- Gestion des catégories
- Système de tags
- Publication et archivage
- Statuts (brouillon, publié, archivé)

### 🏢 **Gestion des services**
- Configuration des services municipaux
- Services en ligne et hors ligne
- Gestion des documents requis
- Tarification et délais de traitement

### 📋 **Demandes citoyens**
- Traitement des demandes
- Système de priorités
- Attribution aux agents
- Suivi et historique
- Notes internes

### ⚙️ **Paramètres**
- Configuration générale du site
- Informations de contact
- Réseaux sociaux
- Notifications
- Mode maintenance
- Sauvegarde et restauration

## Accès à l'interface

### URL d'accès
```
http://localhost:4200/admin/login
```

### Comptes de démonstration

| Rôle | Email | Mot de passe |
|------|-------|--------------|
| Super Admin | admin@mairie.sn | admin123 |
| Agent Municipal | agent@mairie.sn | agent123 |
| Modérateur | moderateur@mairie.sn | mod123 |

## Structure technique

### Architecture
```
src/app/modules/admin/
├── admin.module.ts              # Module principal
├── admin-routing.module.ts      # Configuration des routes
├── admin.component.*            # Layout principal
└── components/
    ├── dashboard/               # Tableau de bord
    ├── users-management/        # Gestion utilisateurs
    ├── content-management/      # Gestion contenu
    ├── services-management/     # Gestion services
    ├── citizen-requests/        # Demandes citoyens
    ├── settings/               # Paramètres
    └── login/                  # Authentification
```

### Technologies utilisées
- **Angular 16** - Framework principal
- **TypeScript** - Langage de programmation
- **SCSS** - Styles avancés
- **Material Icons** - Icônes
- **Responsive Design** - Compatible mobile/tablette

## Installation et démarrage

### Prérequis
- Node.js (version 16+)
- Angular CLI
- NPM ou Yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-projet]

# Installer les dépendances
npm install

# Démarrer le serveur de développement
ng serve

# Accéder à l'interface admin
http://localhost:4200/admin/login
```

## Utilisation

### Connexion
1. Accédez à `/admin/login`
2. Utilisez un des comptes de démonstration
3. Cliquez sur "Se connecter"

### Navigation
- **Sidebar** : Menu principal avec toutes les sections
- **Header** : Actions rapides et profil utilisateur
- **Contenu principal** : Interface de gestion

### Fonctionnalités par section

#### Dashboard
- Consultez les statistiques en temps réel
- Visualisez les activités récentes
- Accédez rapidement aux actions courantes

#### Gestion des utilisateurs
- **Ajouter** : Bouton "Ajouter utilisateur"
- **Modifier** : Clic sur l'icône d'édition
- **Filtrer** : Utilisez les filtres par rôle/statut
- **Rechercher** : Barre de recherche en temps réel

#### Gestion du contenu
- **Créer** : "Nouvel article"
- **Éditer** : Clic sur l'article
- **Publier** : Changement de statut
- **Tags** : Système de mots-clés

#### Gestion des services
- **Configurer** : Services municipaux
- **En ligne** : Activation/désactivation
- **Documents** : Liste des pièces requises
- **Tarifs** : Gestion des coûts

#### Demandes citoyens
- **Traiter** : Clic sur une demande
- **Assigner** : Attribution à un agent
- **Priorité** : Système de priorités
- **Notes** : Commentaires internes

#### Paramètres
- **Général** : Informations du site
- **Contact** : Coordonnées
- **Réseaux sociaux** : Liens sociaux
- **Maintenance** : Mode maintenance
- **Sauvegarde** : Export/import

## Sécurité

### Authentification
- Système de connexion sécurisé
- Sessions utilisateur
- Déconnexion automatique

### Autorisations
- Rôles et permissions
- Accès restreint par niveau
- Audit des actions

## Responsive Design

L'interface s'adapte automatiquement à tous les écrans :
- **Desktop** : Interface complète
- **Tablette** : Navigation adaptée
- **Mobile** : Menu collapsible

## Support et maintenance

### Logs et debugging
- Console du navigateur pour les erreurs
- Messages d'erreur explicites
- Validation des formulaires

### Sauvegarde
- Export des paramètres
- Sauvegarde complète
- Restauration des données

## Personnalisation

### Thèmes
- Couleurs personnalisables via SCSS
- Variables CSS pour les thèmes
- Mode sombre (à implémenter)

### Extensions
- Architecture modulaire
- Ajout facile de nouvelles fonctionnalités
- API extensible

## Roadmap

### Fonctionnalités futures
- [ ] Mode sombre
- [ ] Notifications push
- [ ] Intégration API backend
- [ ] Système de workflow
- [ ] Rapports avancés
- [ ] Multi-langue
- [ ] Authentification 2FA

### Améliorations techniques
- [ ] Tests unitaires
- [ ] Tests e2e
- [ ] PWA (Progressive Web App)
- [ ] Optimisation des performances
- [ ] Accessibilité (WCAG)

## Contact et support

Pour toute question ou problème :
- **Email** : support@mairie-sicap-liberte.sn
- **Documentation** : [Lien vers la doc]
- **Issues** : [Lien vers GitHub Issues]

---

**Version** : 1.0.0  
**Dernière mise à jour** : Août 2024  
**Développé par** : Équipe technique Mairie de Sicap Liberté
