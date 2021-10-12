//import Team from './team.js'



let list = [];
let pokemons= [];
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
.then(resp => resp.json())
.then (data => {
    list = data.results;
    // LOOP OVER EVERY POKEMON
    list.forEach(poke =>{
        fetch(poke.url)
        .then (resp => resp.json())
        .then(pokeObject => {
            pokemons.push(pokeObject);

        });
    });

});

window.onload = () => {
    setTimeout (buildList, 3000);
    function buildList(){
    pokemons.forEach(data => {
    const pokeContainer = document.getElementById("container");
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const pokeInnerHtml = `
    
    <div class="card" style="width: 18rem;">
        <img src="${data.sprites.front_default}">
    <div class="card-body">
        <h5 class="card-title">#${data.id}</h5>
        <h3 class="name">${data.name}</h3>
        <button class="btn btn-outline-success">Add</button>
    </div>
    </div>
    `;
    pokemonEl.innerHTML = pokeInnerHtml;
    pokeContainer.appendChild(pokemonEl);
    
        });
    
    }
    
}
