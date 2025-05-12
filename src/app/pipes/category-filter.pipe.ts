import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/product';

@Pipe({
  name: 'categoryFilter',
})
export class CategoryFilterPipe implements PipeTransform {
  transform(products: Product[], categoryId: number): Product[] {
    if (categoryId === 0) {
      return products; // "Tüm Kategoriler" seçildiğinde tüm ürünleri göster
    }
    return products.filter((product) => product.categoryId === categoryId);
  }
}