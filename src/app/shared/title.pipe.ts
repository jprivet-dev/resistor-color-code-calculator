import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {
  transform(value: string): unknown {
    const str = value.trim();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
