import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, of } from 'rxjs';
import { map, switchMap, catchError, retry, mergeMap, concatMap, share, shareReplay } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(x => this.bs.getSingle(x).pipe(
      catchError((err: HttpErrorResponse) => of({
        isbn: '000',
        title: 'Fehler beim Laden von ' + err.url,
        description: 'Ups!'
      }))
    ))
  );

  showDetails = false;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
  }
}
