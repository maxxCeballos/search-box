'use strict'

const searchBox = document.getElementById('search');
const results = document.getElementById('results');

let testData = [
    'github.com/Reactive-Extensions/RxJS',
    'github.com/ReactiveX/RxJS',
    'xgrommx.github.io/rx-book',
    'reactivex.io',
    'egghead.io/technologies/rx',
    'rxmarbles.com',
    'https://www.manning.com/books/rxjs-in-action'
];


searchBox.addEventListener('keyup', function (event) {
    let query = event.target.value;
    let searchResults = [];
    if(query && query.length > 0) {
        clearResults(results);
       for( let result of testData) {
         if(result.startsWith(query)) {
           searchResults.push(result);
 } }
    }
    for(let result of searchResults) {
       appendResults(result, results);
    }
 });


// limpiar los resultados de busqueda
function clearResults(container) {
    while(container.childElementCount > 0) {
       container.removeChild(container.firstChild);
    }
}


// agrega resultados a la vista
function appendResults(result, container) {
    let li = document.createElement('li');
    let text = document.createTextNode(result);
    li.appendChild(text);
    container.appendChild(li);
}