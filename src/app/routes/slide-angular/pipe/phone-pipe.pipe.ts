import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    let formattedValue = value.trim().replace(/^\+/, '');
    const countryCodeMatch = formattedValue.match(/^(1|44|61|39)\d*/);
    let countruCodeLength = 0;

    if (countryCodeMatch) {
      countruCodeLength = countryCodeMatch[0].length;
      formattedValue = formattedValue.slice(countruCodeLength);
      formattedValue = `+${countryCodeMatch[0]} ${formattedValue}`;
    }

    const formattedNumber = [];

    for (let i = 0; i < formattedValue.length; i++) {
      if (i === countruCodeLength) {
        formattedNumber.push(' ');
      }

      if (i % 3 === countruCodeLength % 3 && i !== countruCodeLength) {
        formattedNumber.push(' ');
      }

      formattedNumber.push(formattedValue[i]);
    }

    return formattedNumber.join('');
  }
}
