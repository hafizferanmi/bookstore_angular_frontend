import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	  addbookform : FormGroup;
    api_response;
    // error: Boolean;
    loading : Boolean;

  constructor(private _bookservice : BookService, private fb: FormBuilder, private _router: Router) {
  		this.addbookform = fb.group({
  			'title':       ['', Validators.compose([Validators.required, Validators.minLength(5)])],
  			'author':  ['', Validators.required],
  			'description':  ['', Validators.required],
        // 'category':  ['', Validators.required],
        'genre':  ['', Validators.required],
        'year':  ['', Validators.required],
  			'no_of_pages':  ['', Validators.required],
  		});
   }

  ngOnInit() {
  	// this._bookservice.add_book('hello');
  }

  addBook(value){
  	console.log(value);
    this.loading = true;
    this._bookservice.add_book(value)
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
              this._router.navigate(['/success'], {skipLocationChange: true});
           },  3000);
        }
        
      })
  }

}
