import { Observable, Observer, interval } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('Next:', value),
    error: err => console.error('Error', err),
    complete: () => console.info('Completdo')
};

const intervalo$ = new Observable<number>(subs => {
    //contador
    let contador = 0;
    const intervalo = setInterval(() => {
        contador++;
        subs.next(contador);
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500)

    return () => {
        clearInterval(intervalo);
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe( num => console.log('Num: ', num));
const subs2 = intervalo$.subscribe( num => console.log('Num: ', num));
const subs3 = intervalo$.subscribe( num => console.log('Num: ', num));
subs1.add(subs2)
    .add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
}, 3000);