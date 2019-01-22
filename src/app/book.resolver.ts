import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';


import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class bookResolver implements Resolve<any> {
  constructor( private _book: BookService ) {}
  item :String;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

  	let id = route.paramMap.get('id');
    return this._book.show_book_with_id(id);

  }
}