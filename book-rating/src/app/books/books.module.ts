import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BookComponent } from './book/book.component';
import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBookComponent } from './create-book/create-book.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
