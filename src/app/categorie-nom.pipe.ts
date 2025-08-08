import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorieNom'
})
export class CategorieNomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
