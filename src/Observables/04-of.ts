import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6,7,8);
const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Inicio del Obs');
obs$.subscribe( 
    next => console.log('Next ' , next),
    null,
    () => console.info('Its over')
);
console.log('Fin del obs$');