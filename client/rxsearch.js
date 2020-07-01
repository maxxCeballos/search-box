'use strict'

// import 'rxjs/add/observable/fromPromise';
// import { from, Observable } from 'rxjs';

// import { range } from "rxjs";
// import { map, filter } from "rxjs/operators";
// import * as Rx from 'rxjs/Rx';

// import { Observable } from 'rxjs/Observable';


const { Observable, fromEvent, from } = rxjs;

const bars_search = document.getElementById("ctn-bars-search");
const cover_ctn_search =  document.getElementById("cover-ctn-search");
const searchBox = document.getElementById('search');
const results = document.getElementById('results');


document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
//Funcion para mostrar el buscador
function mostrar_buscador(){
    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    searchBox.addEventListener('keyup', function (event) {
        let query = event.target.value;
        let searchResults = [];
        if(query && query.length > 0) {
            console.log(query);
            clearResults(results);
           for(let result of testData) {
             if(result.startsWith(query)) {
               searchResults.push(result);
     } }
        }
        if (searchBox.value === ""){
            console.log("aaaaaa")
           results.style.display = "none";
       }else{
        results.style.display = "block";
       }
     
        for(let result of searchResults) {
           appendResults(result, results);
        }
     });
    
   
}

document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);
//Funcion para ocultar el buscador
function ocultar_buscador(){
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    searchBox.value = "";
    console.log("bvvvvvvvv")
   results.style.display = "none";

}




let testData = [
    'github.com/Reactive-Extensions/RxJS',
    'github.com/ReactiveX/RxJS',
    'xgrommx.github.io/rx-book',
    'reactivex.io',
    'egghead.io/technologies/rx',
    'rxmarbles.com',
    'https://www.manning.com/books/rxjs-in-action'
];

// const myObservable = fromEvent(searchBox, 'keyup');
// myObservable.subscribe((data) => {
//     // content.textContent = moment().format('LTS');
//     console.log('data ', data);
// });


// const lala = Observable.from(fetch('http://localhost:3000/'))
   
// lala.subscribe(data => console.log('la data de fetch ', data));


// fetch('http://localhost:3000/')
// .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });


// limpiar los resultados de busqueda
function clearResults(container) {
    while(container.childElementCount > 0) {
       container.removeChild(container.firstChild);
    }
}


// agrega resultados a la vista html
function appendResults(result, container) {
    let li = document.createElement('li');
    let i = document.createElement('i');
    i.setAttribute("class", "fas fa-search");
    li.appendChild(i);
    let text = document.createTextNode(result);
    li.appendChild(text);
    console.log("conta",container);
    container.appendChild(li);
    
}




