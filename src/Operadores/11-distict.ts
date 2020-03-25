import { of, from } from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";


interface Persnaje {
    nombre: string;
}

const personajes: Persnaje[] = [
    {
        nombre: "Doctor X"
    },
    {
        nombre: "Mahama X"
    },
    {
        nombre: "Willis X"
    },
    {
        nombre: "Zero X"
    },
    {
        nombre: "Doctor X"
    },
    {
        nombre: "Megama X"
    },
];

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log)