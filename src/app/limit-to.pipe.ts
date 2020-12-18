import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
   if( value.length > 20){

    return value;
   }
    
  }

}
