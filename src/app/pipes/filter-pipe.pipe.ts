import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/product';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLowerCase() : '';
    return filterText
      ? value.filter((p) =>
          p.name.toLowerCase().includes(filterText) ||
          p.description.toLowerCase().includes(filterText)
        )
      : value;
  }
}
