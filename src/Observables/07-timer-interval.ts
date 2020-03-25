import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log(val),
    complete: () => console.log('Complete'),
};

const interval$ = interval(1000);

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

console.log('Iniciio');
// interval$.subscribe( observer );
timer$.subscribe(observer)
console.log('Fin');