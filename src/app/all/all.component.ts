import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

	books;


  constructor(private _bookservice: BookService) { }

  ngOnInit() {
  	this._bookservice.show_all_books()
  		.subscribe(data => this.books = data); 
  }
}
