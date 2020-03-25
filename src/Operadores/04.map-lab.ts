import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ligula massa, placerat sed libero ac, mattis efficitur ipsum. Donec dignissim, est sit amet consectetur efficitur, orci ante fermentum quam, sit amet fermentum augue dolor eu enim. Nunc auctor tellus sed mollis lobortis. Fusce elementum venenatis porttitor. Phasellus nec risus ac eros feugiat porta ac eget velit. Nullam consequat, dui in cursus eleifend, tellus lectus pulvinar velit, vel vehicula nulla ante quis odio. Aenean cursus faucibus lectus at fringilla. Quisque quis velit vitae tortor malesuada luctus sed eget libero. Fusce quis dolor et ligula placerat convallis a ac dui. Morbi eleifend sit amet est at maximus. In eu metus id mauris fermentum interdum ut ut eros. Nullam vestibulum libero in molestie pretium. Mauris iaculis ante rutrum imperdiet ornare. Etiam pretium ornare ex sit amet dignissim.
<br/><br/>
Fusce condimentum sem at odio maximus, nec fermentum neque congue. Aliquam metus nisl, fringilla eget dui in, mollis volutpat massa. Nulla ultrices elementum nisi. Morbi ut lectus vitae diam viverra vehicula mattis blandit nibh. Suspendisse ac efficitur turpis. Donec ac laoreet velit. Vestibulum vitae lectus urna. Proin in fringilla erat. Sed quam lorem, malesuada a ullamcorper quis, venenatis in est. Quisque vel diam bibendum, maximus tellus id, ultricies mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla at nunc tortor. Nullam semper viverra dolor in ullamcorper. Nullam ultricies turpis in nibh molestie scelerisque. Ut vulputate magna et fringilla laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/>
Donec luctus convallis hendrerit. Morbi consequat accumsan massa. Proin aliquam in urna aliquet lacinia. Vivamus ut mauris odio. Phasellus et ultrices risus, molestie porttitor risus. Donec vitae accumsan arcu. Vestibulum sed commodo nunc. Sed tortor sapien, fermentum nec luctus ac, ullamcorper id arcu. Maecenas ut ligula elementum, vestibulum enim in, gravida augue. Aliquam pharetra erat ut magna rutrum tempus. Proin finibus libero sed mauris pellentesque, eu tincidunt leo commodo. Cras efficitur diam tristique sapien semper porta. Donec pulvinar mi elementum ex dapibus, non egestas ipsum rhoncus. Nullam porta risus vitae nunc facilisis accumsan. Donec gravida purus metus, vel pellentesque elit mollis eu. Quisque eu interdum elit.
<br/><br/>
Suspendisse odio lectus, convallis sit amet condimentum ut, vulputate eu leo. Sed in tincidunt risus, vel luctus est. Fusce interdum volutpat erat sit amet consectetur. Phasellus sed libero erat. Proin ultrices interdum nisl non semper. Cras imperdiet sem massa. Aliquam egestas ac nibh in posuere. Aenean in blandit neque. Quisque iaculis, eros vel malesuada pharetra, purus nulla finibus sapien, rhoncus mattis magna magna ut lorem. Proin id libero cursus, euismod nisl non, cursus nisi.
<br/><br/>
In hac habitasse platea dictumst. Suspendisse vitae lobortis urna, sed molestie orci. Aenean hendrerit odio ac erat varius molestie. Vestibulum dapibus urna ac eros tristique suscipit. Suspendisse dictum justo vel orci finibus sollicitudin. Etiam ac rutrum ex. Mauris tempor, dui sit amet lobortis egestas, dui elit cursus odio, non iaculis sem metus vitae arcu. Etiam luctus, lorem eu porttitor vestibulum, libero ex ultricies dui, vel ultrices diam urna a mauris. Mauris purus mi, pulvinar sed quam et, tempor commodo arcu. Nam vehicula consectetur nisl, quis viverra leo tristique nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl orci, malesuada non varius in, condimentum sodales sapien. Nullam iaculis urna sapien, ac dictum lacus ultricies fringilla. Mauris iaculis, libero eget ultrices aliquet, massa felis sodales mi, nec efficitur metus augue vel diam.` ;

const body = document.querySelector('body');
body.append(texto);

const progresBar = document.createElement('div');
progresBar.setAttribute('class', 'progress-bar');
body.append(progresBar);

//calcular
const calcularPorcentajeScroll = (event) => {
    const { 
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    // console.log(scrollTop, scrollHeight, clientHeight);
    return (scrollTop / (scrollHeight - clientHeight )) * 100;
}

//stream 
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe( porcentaje => {
    progresBar.style.width = `${porcentaje}%`;
})
