import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	currentUrl: string;

  constructor(private _router: Router, private ngProgress: NgProgress) { 
  	_router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

    ngOnInit(){
      /** request started */
      this.ngProgress.start();
      this.ngProgress.inc(.6);
      this.ngProgress.set(.4);
      	this.ngProgress.set(.2);
      this.ngProgress.inc(.6);
      	
      
      // setTimeout(function() {
      	this.ngProgress.set(.2);
      	this.ngProgress.done();
      // }, 1000)
  }
}
