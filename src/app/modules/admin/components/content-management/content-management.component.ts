import { Component, OnInit } from '@angular/core';

interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  status: 'draft' | 'published' | 'archived';
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  featuredImage?: string;
  tags: string[];
}

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {
  
  articles: Article[] = [
    {
      id: 1,
      title: 'Nouvelle réglementation sur les permis de construire',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      excerpt: 'Découvrez les nouvelles règles pour les demandes de permis de construire.',
      author: 'Admin Contenu',
      category: 'Réglementation',
      status: 'published',
      createdAt: new Date('2024-08-01'),
      updatedAt: new Date('2024-08-01'),
      publishedAt: new Date('2024-08-01'),
      tags: ['permis', 'construction', 'réglementation']
    },
    {
      id: 2,
      title: 'Horaires d\'été des services municipaux',
      content: 'Les horaires d\'ouverture des services municipaux...',
      excerpt: 'Consultez les nouveaux horaires d\'été de nos services.',
      author: 'Agent Municipal',
      category: 'Information',
      status: 'published',
      createdAt: new Date('2024-07-15'),
      updatedAt: new Date('2024-07-20'),
      publishedAt: new Date('2024-07-20'),
      tags: ['horaires', 'été', 'services']
    },
    {
      id: 3,
      title: 'Projet d\'aménagement du centre-ville',
      content: 'Un grand projet d\'aménagement est en cours...',
      excerpt: 'Présentation du projet de rénovation du centre-ville.',
      author: 'Maire',
      category: 'Projets',
      status: 'draft',
      createdAt: new Date('2024-08-05'),
      updatedAt: new Date('2024-08-08'),
      tags: ['aménagement', 'centre-ville', 'projet']
    }
  ];

  filteredArticles: Article[] = [];
  searchTerm = '';
  selectedCategory = '';
  selectedStatus = '';
  showAddArticleModal = false;
  showEditArticleModal = false;
  selectedArticle: Article | null = null;

  newArticle: Partial<Article> = {
    title: '',
    content: '',
    excerpt: '',
    category: '',
    status: 'draft',
    tags: []
  };

  categories = [
    'Information',
    'Réglementation',
    'Projets',
    'Événements',
    'Services',
    'Actualités'
  ];

  constructor() { }

  ngOnInit(): void {
    this.filteredArticles = [...this.articles];
  }

  filterArticles(): void {
    this.filteredArticles = this.articles.filter(article => {
      const matchesSearch = !this.searchTerm || 
        article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = !this.selectedCategory || article.category === this.selectedCategory;
      const matchesStatus = !this.selectedStatus || article.status === this.selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }

  openAddArticleModal(): void {
    this.newArticle = {
      title: '',
      content: '',
      excerpt: '',
      category: '',
      status: 'draft',
      tags: []
    };
    this.showAddArticleModal = true;
  }

  closeAddArticleModal(): void {
    this.showAddArticleModal = false;
  }

  openEditArticleModal(article: Article): void {
    this.selectedArticle = { ...article };
    this.showEditArticleModal = true;
  }

  closeEditArticleModal(): void {
    this.showEditArticleModal = false;
    this.selectedArticle = null;
  }

  addArticle(): void {
    if (this.newArticle.title && this.newArticle.content) {
      const article: Article = {
        id: Math.max(...this.articles.map(a => a.id)) + 1,
        title: this.newArticle.title!,
        content: this.newArticle.content!,
        excerpt: this.newArticle.excerpt || this.generateExcerpt(this.newArticle.content!),
        author: 'Administrateur',
        category: this.newArticle.category || 'Information',
        status: this.newArticle.status || 'draft',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: this.newArticle.tags || []
      };

      if (article.status === 'published') {
        article.publishedAt = new Date();
      }

      this.articles.push(article);
      this.filterArticles();
      this.closeAddArticleModal();
    }
  }

  updateArticle(): void {
    if (this.selectedArticle) {
      const index = this.articles.findIndex(a => a.id === this.selectedArticle!.id);
      if (index !== -1) {
        this.selectedArticle.updatedAt = new Date();
        if (this.selectedArticle.status === 'published' && !this.selectedArticle.publishedAt) {
          this.selectedArticle.publishedAt = new Date();
        }
        this.articles[index] = { ...this.selectedArticle };
        this.filterArticles();
        this.closeEditArticleModal();
      }
    }
  }

  deleteArticle(articleId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      this.articles = this.articles.filter(a => a.id !== articleId);
      this.filterArticles();
    }
  }

  publishArticle(article: Article): void {
    const index = this.articles.findIndex(a => a.id === article.id);
    if (index !== -1) {
      this.articles[index].status = 'published';
      this.articles[index].publishedAt = new Date();
      this.articles[index].updatedAt = new Date();
      this.filterArticles();
    }
  }

  archiveArticle(article: Article): void {
    const index = this.articles.findIndex(a => a.id === article.id);
    if (index !== -1) {
      this.articles[index].status = 'archived';
      this.articles[index].updatedAt = new Date();
      this.filterArticles();
    }
  }

  generateExcerpt(content: string): string {
    return content.substring(0, 150) + (content.length > 150 ? '...' : '');
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'draft': '#f39c12',
      'published': '#27ae60',
      'archived': '#95a5a6'
    };
    return colors[status] || '#95a5a6';
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'draft': 'Brouillon',
      'published': 'Publié',
      'archived': 'Archivé'
    };
    return labels[status] || status;
  }

  addTag(event: any): void {
    const input = event.target;
    const value = input.value.trim();
    
    if (event.key === 'Enter' && value) {
      if (this.selectedArticle) {
        if (!this.selectedArticle.tags.includes(value)) {
          this.selectedArticle.tags.push(value);
        }
      } else if (this.newArticle.tags) {
        if (!this.newArticle.tags.includes(value)) {
          this.newArticle.tags.push(value);
        }
      }
      input.value = '';
      event.preventDefault();
    }
  }

  removeTag(tag: string, isEdit: boolean = false): void {
    if (isEdit && this.selectedArticle) {
      this.selectedArticle.tags = this.selectedArticle.tags.filter(t => t !== tag);
    } else if (this.newArticle.tags) {
      this.newArticle.tags = this.newArticle.tags.filter(t => t !== tag);
    }
  }
}
