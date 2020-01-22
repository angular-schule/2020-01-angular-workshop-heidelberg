import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // WARNUNG: führt zu einem Bug, wenn wir AJAX machen
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [{
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    }, {
      isbn: '111',
      title: 'AngularJS',
      description: 'Altes Buch',
      rating: 3
    }, {
      isbn: '222',
      title: 'React',
      description: 'Mehh! 🤨',
      rating: 1
    }];
  }

  doRateUp(book: Book) {
    console.log(book, 'muss gut bewertet werden!');
  }

  doRateDown(book: Book) {
    console.log(book, 'muss schlecht bewertet werden!');

  }
}