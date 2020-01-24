import { Observable } from 'rxjs';

/*************************************/

// TODO
const myObservable$ = { subscribe: (o: any) => { } } // ...  real observable here

/*************************************/

const observer = {
  next: e => console.log(e),
  error: e => console.error('ERROR', e),
  complete: () => console.info('Complete')
};

myObservable$.subscribe(observer);
