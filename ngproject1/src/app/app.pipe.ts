import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "reverseText"
})

export class ReversePipe implements PipeTransform {
    transform(val:string) {
        return val.split("").reverse().join("");
    }
}