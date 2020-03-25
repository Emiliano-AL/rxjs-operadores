
import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('Siguiente:', value),
    error: err => console.error('Error', err),
    complete: () => console.info('Completdo')
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('mundo');
    subs.next('otra vez');
    subs.complete();
    subs.next('ya no.');
});

obs$.subscribe(observer);
// obs$.subscribe( res => {
//     console.log(res);
// });
// obs$.subscribe( 
//     valor => console.log('next: ', valor),
//     error => console.error('Error: ', error),
//     () => console.info('Completado')
// );