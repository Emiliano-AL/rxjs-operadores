import { of, interval, forkJoin } from "rxjs";
import { take, delay } from "rxjs/operators";


const numero$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin(numero$, intervalo$, letras$)
// .subscribe(console.log);
// forkJoin(numero$, intervalo$, letras$)
//     .subscribe( res => {
//         console.log('numero', res[0]);
//         console.log('intervalo', res[1]);
//         console.log('letras', res[2]);
//     } );

// forkJoin({numero$, intervalo$, letras$})
//     .subscribe( res => {
//         console.log(res);
//     } );

forkJoin({
       num: numero$, 
       intv: intervalo$, 
       letr: letras$})
    .subscribe( res => {
        console.log(res);
    } );