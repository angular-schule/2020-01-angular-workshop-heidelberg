import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { map, switchMap, catchError, retry, mergeMap, concatMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  title: string;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      switchMap(x => this.bs.getSingle(x))
    )
    .subscribe(book => this.title = book.title);
  }


}
