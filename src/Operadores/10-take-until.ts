import { interval, fromEvent, pipe } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

const boton = document.createElement('button');

boton.innerHTML = 'Detener';
document.querySelector('body').append(boton);

const conter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click')
    pipe(
        tap(() => console.log('tap antes de skip')),
        skip(1),
        tap(() => console.log('tap después de skip')),
    );

conter$
    .pipe(
        takeUntil(clickBtn$)
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    });