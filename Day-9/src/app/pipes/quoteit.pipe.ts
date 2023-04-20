import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteit'
})
export class QuoteitPipe implements PipeTransform {

  transform(target: string): string {
   let regrex= /(great|excellent|good|perfect|satisfied)/
   if (regrex.test(target.toLowerCase()))
   return '"'+target+'"'
   return target 
  }

}
