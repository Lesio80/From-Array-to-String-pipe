import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkEmpty',
})
export class CheckEmptyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value === 0 || value
      ? `${/^\s+$/g.test(value) ? '-' : value}`.trim()
      : '-';
  }
}
