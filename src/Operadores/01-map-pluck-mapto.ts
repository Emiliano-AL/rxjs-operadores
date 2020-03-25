import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1,5)
//     .pipe(
//         map<number, string>( val => {
//             return (val * 10).toString()
//         })
//     )
//     .subscribe(console.log)

const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup');
const keyUpCode$ = keyUp$.pipe(
    map(event => event.code )
);

const keyupPluck$ = keyUp$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyUp$.pipe(
    mapTo('tecla presionada')
);


keyUp$.subscribe(console.log);
keyUpCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupMapTo$.subscribe(code => console.log('mapTo', code));