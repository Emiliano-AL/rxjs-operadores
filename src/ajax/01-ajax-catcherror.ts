import {ajax, AjaxError} from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response:Response) => {
    if(!response.ok){
        throw new Error(response.statusText)
    }

    return response;
}

const atrapaError = (err: AjaxError) => {
        console.warn('error', err);
        return of([]);
}

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log(data))
//     .catch(  err => console.warn('Error', err) );

// fetchPromesa
//     .then(manejaErrores)
//     .then( resp => resp.json() )
//     .then( data => console.log(data))
//     .catch(  err => console.warn('Error', err) );

ajax(url)
    .pipe(
        pluck('response'),
        catchError( atrapaError )
        // map( res => res.response)
    )
    .subscribe(console.log)