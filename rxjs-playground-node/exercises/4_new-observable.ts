import { Observable, Subscriber } from 'rxjs';

/*************************************/

// TODO
const myObservable$ = new Observable<string>(subscriber => {

  subscriber.next('yay! 😀');
  subscriber.next('2');
  subscriber.next('3');
  setTimeout(() => {
    console.log('Hört noch einer zu???');
    subscriber.next('4');
  }, 500);

  setTimeout(() => subscriber.error('ERRRRRR!'), 1);
});

/*************************************/

const observer = {
  next: e => console.log(e),
  error: e => console.error('ERROR', e),
  complete: () => console.info('Complete')
};

const sub = myObservable$.subscribe(observer);
//sub.unsubscribe();

