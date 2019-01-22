import { Pipe, PipeTransform } from '@angular/core';
// import * as moment from 'moment';


@Pipe({
  name: 'book'
})
export class BookPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	// return moment().format(value)
    var a = value.split('T')[0];
    // return moment(a).fromNow();
    return true;
  }

}
