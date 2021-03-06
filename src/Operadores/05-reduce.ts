import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const numbers = [1, 2 ,3 ,4 , 5];

const totalReducer = (acumulador: number, valor:number) => {
    return acumulador + valor;
} 

const total = numbers.reduce(totalReducer, 0);
console.log('Total', total);

interval(1000)
.pipe(
    take(4), 
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Complete')
})