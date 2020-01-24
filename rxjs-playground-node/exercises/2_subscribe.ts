import { simpleTimer$ } from './data/simple-timer';

// TODO: Subscribe

// simpleTimer$.subscribe(
//   i => console.log(i),
//   err => console.error(err),
//   () => console.info('Complete! 😀')
// );

const observer = {
  next: i => console.log(i),
  error: err => console.error(err),
  complete: () => console.info('Complete! 😀')
};

simpleTimer$.subscribe(observer);
