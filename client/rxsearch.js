'use strict'

const searchBox = document.getElementById('search');
const results = document.getElementById('results');

const bars_search = document.getElementById("ctn-bars-search");
const cover_ctn_search =  document.getElementById("cover-ctn-search");

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);

function mostrar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}


//Funcion para mostrar el buscador
function mostrar_buscador(){
    let responseServer;

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";

    searchBox.addEventListener('keyup', function (event) {
        let query = event.target.value;
        let searchResults = [];
        if(query && query.length > 0) {
            
            responseServer = rxjs.from(fetch(`http://localhost:3000/?consulta=${query}`)
            .then(function(response) {
                return response.json();
            }))

            clearResults(results);

            responseServer.subscribe( resultado => {

                for(let result of resultado) {
                    searchResults.push(result);
                }

                for(let result of searchResults) {
                   appendResults(result, results);
                }
            });
        }

        if (searchBox.value === ""){
            results.style.display = "none";
        } else{
            results.style.display = "block";
        }
    });  
}

document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Funcion para ocultar el buscador
function ocultar_buscador(){
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    searchBox.value = "";
   results.style.display = "none";

}

// limpia los resultados de busqueda
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
    container.appendChild(li);
}