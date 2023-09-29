import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText',
})
export class HighlightTextPipe implements PipeTransform {
  transform(value: number | string, args: string) {
    if (!args) {
      return value;
    }

    const str = String(value);

    const regex = new RegExp(args, 'gi');
    const match = str.match(regex);

    if (!match) {
      return value;
    }

    return str.replace(regex, `<span class='highlight'>${match[0]}</span>`);
  }
}
