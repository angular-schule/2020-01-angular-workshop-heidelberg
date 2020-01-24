import { from } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';

let dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


from(dataArray).pipe(
  map(x => x * 10),

  // 2. filtere alle Werte heraus, die kleines als 30 sind
  // 3. erzeuge die Summe aller werte
  // 4. kniffelig, etwas gemein, daher optional:
  //    gebe entsprechend viel Herzchen ❤️, wie die Summe große

  filter(x => x > 30),
  reduce((acc, curr) => acc + curr, 0),
  map(x => '❤️'.repeat(x))
).subscribe(console.log)
