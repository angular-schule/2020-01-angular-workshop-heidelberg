import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export const simpleTimer$ = new Observable(observer => {
  let i = 0;
  observer.next(i++);
  const interval = setInterval(() => observer.next(i++), 1000);
  return () => {
    clearInterval(interval);
  }
}).pipe(take(10));
