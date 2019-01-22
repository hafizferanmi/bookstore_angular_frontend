import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	// api_response;

	books;


  constructor(private _bookservice: BookService) { }

  ngOnInit() {
  	this._bookservice.show_all_books()
  		.subscribe(data => {this.books = data
        // console.log(data.length);
      }); 
  }
}
