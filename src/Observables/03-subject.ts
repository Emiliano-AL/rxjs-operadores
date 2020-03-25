import { Observable, Observer, Subject } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('Next:', value),
    error: err => console.error('Error', err),
    complete: () => console.info('Completdo')
};

const intervalo$ = new Observable<number>(subs => {
    const interId = setInterval(() => {
        subs.next(Math.random())
    }, 1000);

    return () => {
        clearInterval(interId);
        console.log('Intervalo destruído');
    }
});

/**
 * 1.- casteo multiple
 * 2.- también es un observer
 * 3.- Next, error, complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd));

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);