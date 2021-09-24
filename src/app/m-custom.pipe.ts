import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class MyCustomPipe implements PipeTransform {
  transform(value: string[] | string | undefined, args?: any): string {
      if (Array.isArray(value)) {
        return value.join(' - ');
      }
    return value;
  }
}
