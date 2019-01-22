import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { DescComponent } from './desc/desc.component';

import { BookService } from './book.service';
import { HeaderComponent } from './header/header.component';
import { AllComponent } from './all/all.component';
import { SuccessComponent } from './success/success.component';

import { bookResolver } from './book.resolver';
import { DeletesuccessComponent } from './deletesuccess/deletesuccess.component';
import { ModifyComponent } from './modify/modify.component';
import { ModifysuccessComponent } from './modifysuccess/modifysuccess.component';
import { BookPipe } from './book.pipe';


const appRoutes: Routes = [
   { path: '', pathMatch: 'full', component: HomeComponent },
   { path: 'all', component: AllComponent },
   { path: 'add', component: AddComponent },
   { path: 'success', component: SuccessComponent },
   { path: 'delete/success', component: DeletesuccessComponent },
   { path: 'book/:id', component: DescComponent, resolve: { book: bookResolver } },
   { path: ':id/modify', component: ModifyComponent,  resolve: { book: bookResolver }  },
   { path: 'modify/success', component: ModifysuccessComponent },
];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    DescComponent,
    HeaderComponent,
    AllComponent,
    SuccessComponent,
    DeletesuccessComponent,
    ModifyComponent,
    ModifysuccessComponent,
    BookPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // HttpModule,
    HttpClientModule,
    NgProgressModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService, bookResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
