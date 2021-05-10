import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortNumber' })
export class ShortNumberPipe implements PipeTransform {
    transform(value: number): string {
        if (value === 0) {
            return '0';
        }
        else {
            // hundreds
            if (value <= 999) {
                return checkDecimal(value) + '';
            }
            // thousands
            else if (value >= 1000 && value <= 99999) {
                return checkDecimal(value / 1000) + ' K';
            }
            // lakhs
            else if (value >= 100000 && value <= 9999999) {
                return checkDecimal(value / 100000) + ' L';
            }
            // crores
            else if (value >= 10000000 && value <= 99999999999) {
                return checkDecimal(value / 10000000) + ' Cr';
            }
            else {
                return String(value);
            }
        }
    }
}

function checkDecimal(value): number {
    return String(value).includes('.') ? value.toFixed(2) : value ;
}
