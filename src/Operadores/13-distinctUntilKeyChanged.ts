import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";


const numeros$ = of(1, 1, 1, 2, 3,3,4,4,5,6, 6 ,7, 8,8,9);

numeros$
    .pipe(
        distinct()
    )
    .subscribe(console.log);

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
        distinct( p => p.nombre)
    ).subscribe(console.log)