import { range, fromEvent, of, from } from 'rxjs';
import { map, pluck, mapTo, filter } from 'rxjs/operators';


// range(1, 10).pipe(
//     filter(value => value % 2 === 1)
// ).subscribe(console.log)

range(20, 30).pipe(
    filter((value, i) => {
        console.log('Index ', i);
        return value % 2 === 1
    })
) //.subscribe(console.log)

interface Personaje{
    tipo: string,
    nombre:string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

from(personajes).pipe(
    filter(val => {
        return val.tipo == 'heroe'
    })
).subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map(event => event.code),
        filter( key => key === 'Enter')
    );

keyUp$.subscribe(console.log)