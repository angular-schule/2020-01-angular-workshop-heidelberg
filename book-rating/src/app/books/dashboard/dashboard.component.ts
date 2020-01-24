import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

import { Store, select } from '@ngrx/store';
import { State } from '../reducers/book.reducer';
import { loadBooks } from '../actions/book.actions';
import { selectBooksLoading, selectBooks } from '../selectors/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  loading$ = this.store.pipe(select(selectBooksLoading));
  books$ = this.store.pipe(select(selectBooks));

  constructor(private store: Store<State>) {
    // this.store.dispatch(loadBooks());
  }

  ngOnInit() {
  }

  doRateUp(book: Book) {
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: book.rating < 5 ? ++book.rating : 5
    // // };
    // this.update(ratedBook);
  }

  doRateDown(book: Book) {
    // const ratedBook = this.br.rateDown(book);
    // this.update(ratedBook);
  }

  update(ratedBook: Book) {
    // this.books = this.books
    //   .map(book => book.isbn === ratedBook.isbn ? ratedBook : book)
    //   .sort((a, b) => b.rating - a.rating);
  }

  doCreate(newBook: Book) {
    // this.books = [...this.books, newBook];
  }
}
