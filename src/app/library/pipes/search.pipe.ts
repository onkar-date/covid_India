import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Array<any>, value: string): Array<any> {
    if (!items) { return []; }
    if (!value) { return items; }

    return items.filter( str => {
      return str.name.toLowerCase().includes(value.toLowerCase());
    });
  }

}
