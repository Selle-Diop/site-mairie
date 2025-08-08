import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorieNom'
})
export class CategorieNomPipe implements PipeTransform {

  transform(categorieId: string, categories: any[]): string {
    const categorie = categories.find(c => c.id === categorieId);
    return categorie?.nom || '';
  }

}
