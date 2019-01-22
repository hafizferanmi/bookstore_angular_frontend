import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
	bookmodifyform : FormGroup;
    api_response;
    // error: Boolean;
    loading : Boolean;
    book;
    id;

  constructor(private _bookservice : BookService, private fb: FormBuilder, private _router: Router, private _route: ActivatedRoute) {
  		this.bookmodifyform = fb.group({
  			'title':       ['', Validators.compose([Validators.required, Validators.minLength(5)])],
  			'author':  ['', Validators.required],
  			'description':  ['', Validators.required],
        // 'category':  ['', Validators.required],
        'genre':  ['', Validators.required],
        'no_of_pages':  ['', Validators.required],
  			'year':  ['', Validators.required],
  		});
   }


  ngOnInit() {
  	// var id = this._route.paramMap.get('id');
  	this.id = this._route.snapshot.params['id'];

  	// console.log(id);
  	this._route.data
  		.subscribe(data => {
  			 this.book = data.book;
  			 // console.log(this.book);
  			 this.bookmodifyform.patchValue(
           {'title': this.book.title,
            'author': this.book.author,
            'description': this.book.description,
            // 'category': this.book.category,
            'genre': this.book.genre,
            'no_of_page' : this.book.no_of_pages,
            'year': this.book.year
         });
  		})
  }

	modifybook(value){
	  	console.log(value);
	    this.loading = true;
	    this._bookservice.update_book_with_id(this.id, value)
	      .subscribe(data => {
	        this.api_response = data;
	        console.log(this.api_response);


	        if (this.api_response.error) {
	          setTimeout(() => {
	              var error = true;
	              this.loading = false
	           },  3000);
	        }else{
	          setTimeout(() => {
	              // var error = false;
	              this.loading = false;
	              // this.addbookform.reset();
	              this._router.navigate(['/modify/success'], {skipLocationChange: true});
	           },  3000);
	        }
	        
	      })
	  }

}
