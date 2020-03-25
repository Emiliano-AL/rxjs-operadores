import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
    tap( t => console.log('tap', t)),
    take(2)
).
subscribe({
    next: val => console.log('nex', val),
    complete: () => console.log('complete')
})