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
                return checkDedcimal(value) + '';
            }
            // thousands
            else if (value >= 1000 && value <= 999999) {
                return checkDedcimal(value / 1000) + 'K';
            }
            // millions
            else if (value >= 1000000 && value <= 999999999) {
                return checkDedcimal(value / 1000000) + 'M';
            }
            // billions
            else if (value >= 1000000000 && value <= 999999999999) {
                return checkDedcimal(value / 1000000000) + 'B';
            }
            else {
                return String(value);
            }
        }
    }
}

function checkDedcimal(value): number {
    return String(value).includes('.') ? value.toFixed(2) : value ;
}
