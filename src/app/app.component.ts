import { OnInit, Component } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'bo';

  constructor(private ngProgress: NgProgress){}

    ngOnInit(){
      /** request started */
      this.ngProgress.start();
      this.ngProgress.done();
  }
}
