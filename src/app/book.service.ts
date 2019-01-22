import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) { }

  api_path : string = 'http://localhost:5000/api';

  show_all_books(){
  	return this._http.get(this.api_path + '/all_books').pipe(map(res => res));
  	// return true;
  }

  show_book_with_id(id){
  	return this._http.get(this.api_path + '/' + id).pipe(map(res => res));
    // return 'hello'
  	
  }

  add_book(value){
  	return this._http.post(this.api_path + '/add_book', value).pipe(map(res => res));
  	
  }

  delete_book_with_id(id){
    return this._http.delete(this.api_path + '/delete/' + id).pipe(map(res => res));
  }

  update_book_with_id(id, value){
    return this._http.post(this.api_path + '/modify/' + id, value).pipe(map(res => res));
  }

}
