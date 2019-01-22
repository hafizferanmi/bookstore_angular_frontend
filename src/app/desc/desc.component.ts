import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Resolve, ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit {
	id;
	book;
  api_response;
  delete_error;

  constructor(private _bookservice: BookService, private _route: ActivatedRoute, private _router: Router, private _title: Title) { }

  ngOnInit() {
  	this.id = this._route.snapshot.params['id'];
  	// console.log(this.id)
  	this._route.data
  		.subscribe(data => {
  			 this.book = data.book;
  			 // console.log(this.book);
  		})
      this._title.setTitle(this.book.title);
  }

  delete(id){
    var a = confirm('Are you sure you want to delete');
    if (a) {
        this._bookservice.delete_book_with_id(id).subscribe(
        data => {
          this.api_response = data;
          console.log(this.api_response)
          if (this.api_response.error) {
            //show error message
            this.delete_error = true;
          }else{
            this._router.navigate(['/delete/success'], {skipLocationChange: true});
          }
        }
      );
    }

    // alert(id);
  }



}
