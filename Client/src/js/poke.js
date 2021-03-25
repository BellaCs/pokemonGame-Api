import { pokemons } from "./inici.js";
import * as socket from "./socket.js";
import * as api from "./api.js";



var pokeballs, user, pokemonsOponent = [],
    pokemonImg1, pokemonImg2, pokemonImg3, pokemonImg4, pokemonImg5, pokemonImg6,
    pokemonImgOponenent1, pokemonImgOponenent2, pokemonImgOponenent3, pokemonImgOponenent4, pokemonImgOponenent5, pokemonImgOponenent6,
    pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, firstPokemon,
    pokemonOponent1 = {}, pokemonOponent2 = {}, pokemonOponent3 = {}, pokemonOponent4 = {}, pokemonOponent5 = {}, pokemonOponent6 = {},
    pokemonMapaImg, pokemonMapaName, pokemonMapaImgOponent, pokemonMapaNameOponent, mapDisplay, selectedPokemonImg,
    DOMhabilitat1, DOMhabilitat2, DOMhabilitat3, DOMhabilitat4,
    habilitat1, habilitat2, habilitat3, habilitat4,
    jugar_btn, jugarDiv, ProgressBar1, ProgressBar2,
    selectedPokemonId, playing = false,
    oponentStatsShow;

window.onload = function () {
    getUserFromLocal();
    getDOMElements();
    setEventListeners();
    loadPokemonToVar();
    mostrarPokemons();
    disableTurn();
}

function getUserFromLocal() {
    user = localStorage.getItem("user");
}

function setEventListeners() {
    for (let index = 0; index < pokeballs.length; index++) {
        pokeballs[index].addEventListener("click", changeEvent)
    }
    jugar_btn.addEventListener("click", buscarPartida);
}

function getDOMElements() {
    pokeballs = document.getElementsByClassName("selectPokeballs");
    jugar_btn = document.getElementById("jugar");
    jugarDiv = document.getElementById("divJugar");
    pokemonMapaImg = document.getElementById("pokemon1");
    pokemonMapaImgOponent = document.getElementById("pokemon2")
    pokemonMapaName = document.getElementById("pokemon-1-name");
    pokemonMapaNameOponent = document.getElementById("pokemon-2-name");
    ProgressBar1 = document.getElementById("health1");
    ProgressBar2 = document.getElementById("health2");
    habilitat1 = document.getElementById("hab1");
    habilitat2 = document.getElementById("hab2");
    habilitat3 = document.getElementById("hab3");
    habilitat4 = document.getElementById("hab4");
    mapDisplay = document.getElementById("mapa");
    pokemonImg1 = document.getElementById("pok1");
    pokemonImg2 = document.getElementById("pok2");
    pokemonImg3 = document.getElementById("pok3");
    pokemonImg4 = document.getElementById("pok4");
    pokemonImg5 = document.getElementById("pok5");
    pokemonImg6 = document.getElementById("pok6");
    pokemonImgOponenent1 = document.getElementById("pokOponenent1");
    pokemonImgOponenent2 = document.getElementById("pokOponenent2");
    pokemonImgOponenent3 = document.getElementById("pokOponenent3");
    pokemonImgOponenent4 = document.getElementById("pokOponenent4");
    pokemonImgOponenent5 = document.getElementById("pokOponenent5");
    pokemonImgOponenent6 = document.getElementById("pokOponenent6");
    oponentStatsShow = document.getElementById("p2-stats");
}

function loadPokemonToVar() {
    pokemon1 = pokemons[0];
    pokemon2 = pokemons[1];
    pokemon3 = pokemons[2];
    pokemon4 = pokemons[3];
    pokemon5 = pokemons[4];
    pokemon6 = pokemons[5];
}

function mostrarPokemons() {
    pokemonImg1.src = pokemon1.pokemon_sprites_front;
    pokemonImg2.src = pokemon2.pokemon_sprites_front;
    pokemonImg3.src = pokemon3.pokemon_sprites_front;
    pokemonImg4.src = pokemon4.pokemon_sprites_front;
    pokemonImg5.src = pokemon5.pokemon_sprites_front;
    pokemonImg6.src = pokemon6.pokemon_sprites_front;
}

function changeEvent(pokemonTarget) {
    pokemonChosed = pokemonTarget.target.value;
    if (playing) {

    } else {
        if (selectedPokemonImg != null) selectedPokemonImg.style.backgroundColor = "white";
        switch (pokemonChosed) {
            case 1:
                setPokemonDetails(pokemon1, 1);
                firstPokemon = pokemon1;
                selectedPokemonImg = pokemonImg1;
                break;
            case 2:
                setPokemonDetails(pokemon2, 2);
                firstPokemon = pokemon2;
                selectedPokemonImg = pokemonImg2;
                break;
            case 3:
                setPokemonDetails(pokemon3, 3);
                firstPokemon = pokemon3;
                selectedPokemonImg = pokemonImg3;
                break;
            case 4:
                setPokemonDetails(pokemon4, 4);
                firstPokemon = pokemon4;
                selectedPokemonImg = pokemonImg4;
                break;
            case 5:
                setPokemonDetails(pokemon5, 5);
                firstPokemon = pokemon5;
                selectedPokemonImg = pokemonImg5;
                break;
            case 6:
                setPokemonDetails(pokemon6, 6);
                firstPokemon = pokemon6;
                selectedPokemonImg = pokemonImg6;
                break;
            default:
                break;
        }
        selectedPokemonImg.style.backgroundColor = "grey";
    }
}

export function cambiarPokemon(pokemonIdToDisplay) {
    if (selectedPokemonImg != null) selectedPokemonImg.style.backgroundColor = "white";
    switch (pokemonIdToDisplay) {
        case pokemon1.pokemon_id:
            selectedPokemonImg = pokemonImg1;
            setPokemonDetails(pokemon1, 1);
            break;
        case pokemon2.pokemon_id:
            selectedPokemonImg = pokemonImg2;
            setPokemonDetails(pokemon2, 2);
            break;
        case pokemon3.pokemon_id:
            selectedPokemonImg = pokemonImg3;
            setPokemonDetails(pokemon3, 3);
            break;
        case pokemon4.pokemon_id:
            selectedPokemonImg = pokemonImg4;
            setPokemonDetails(pokemon4, 4);
            break;
        case pokemon5.pokemon_id:
            selectedPokemonImg = pokemonImg5;
            setPokemonDetails(pokemon5, 5);
            break;
        case pokemon6.pokemon_id:
            selectedPokemonImg = pokemonImg6;
            setPokemonDetails(pokemon6, 6);
            break;
        default:
            break;
    }
    selectedPokemonImg.style.backgroundColor = "grey";
}

export function cambiarPokemonOponent(pokemonId) {
    switch (pokemonIdToDisplay) {
        case pokemonOponent1.pokemon_id:
            setPokemonDetailsForOponent(pokemonOponent1, pokemonsOponent[0]);
            break;
        case pokemonOponent2.pokemon_id:
            setPokemonDetailsForOponent(pokemonOponent2, pokemonsOponent[1]);
            break;
        case pokemonOponent3.pokemon_id:
            setPokemonDetailsForOponent(pokemonOponent3, pokemonsOponent[2]);
            break;
        case pokemonOponent4.pokemon_id:
            setPokemonDetailsForOponent(pokemonOponent4, pokemonsOponent[3]);
            break;
        case pokemonOponent5.pokemon_id:
            setPokemonDetailsForOponent(pokemonOponent5, pokemonsOponent[4]);
            break;
        case pokemonOponent6.pokemon_id:
            setPokemonDetailsForOponent(pokemonOponent6, pokemonsOponent[5]);
            break;
        default:
            api.getPokemonOponent(pokemonId, response => {
                let pokemonOponent = JSON.parse(response);
                setPokemonDetailsForOponent(pokemonOponent);
                setNewOponentPokemon(pokemonOponent);
            });
            break;
    }

}

function buscarPartida() {
    if (firstPokemon != null) {
        jugarDiv.style.display = "none";
        mapDisplay.style.display = "block";
        ProgressBar1.disabled = true;
        ProgressBar2.disabled = true;
        ProgressBar1.style.display = "inline";
        ProgressBar2.style.display = "inline";
        parseUser();
        socket.buscarPartida(user, (status) => {
            console.log(status);
        });
    } else {
        alert("Selecciona un pokemon abans de buscar una partida")
    }
}

export function initGame() {

    pokemonMapaImgOponent.style.display = null;
    oponentStatsShow.style.display = null;

}

function setPokemonDetails(pokemonToDisplay, pokeSelectId) {
    ProgressBar1.max = JSON.parse(pokemons[pokeSelectId - 1]).pokemon_stats_hp;
    selectedPokemonId = pokemonToDisplay.pokemon_id;
    pokemonMapaImg.src = pokemonToDisplay.pokemon_sprites_back;
    pokemonMapaName.textContent = pokemonToDisplay.pokemon_name;
    ProgressBar1.value = pokemonToDisplay.pokemon_stats_hp;
    habilitat1 = pokemonToDisplay.atacs[0];
    habilitat2 = pokemonToDisplay.atacs[1];
    habilitat3 = pokemonToDisplay.atacs[2];
    habilitat4 = pokemonToDisplay.atacs[3];

    DOMhabilitat1.textContent = habilitat1.movement_name + " \n " + habilitat1.movement_pp + " / " + JSON.parse(pokemons[pokeSelectId - 1]).atacs[0].movement_pp;
    DOMhabilitat2.textContent = habilitat2.movement_name + " \n " + habilitat2.movement_pp + " / " + JSON.parse(pokemons[pokeSelectId - 1]).atacs[1].movement_pp;
    DOMhabilitat3.textContent = habilitat3.movement_name + " \n " + habilitat3.movement_pp + " / " + JSON.parse(pokemons[pokeSelectId - 1]).atacs[2].movement_pp;
    DOMhabilitat4.textContent = habilitat4.movement_name + " \n " + habilitat4.movement_pp + " / " + JSON.parse(pokemons[pokeSelectId - 1]).atacs[3].movement_pp;
}

function setPokemonDetailsForOponent(pokemonToDisplay, PokemonRaw) {
    ProgressBar2.max = PokemonRaw.pokemon_stats_hp;
    pokemonMapaImgOponent.src = pokemonToDisplay.pokemon_sprites_front;
    pokemonMapaNameOponent.textContent = pokemonToDisplay.pokemon_name;
    ProgressBar2.value = pokemonToDisplay.pokemon_stats_hp;
}

function parseUser() {
    user.player_first_pokemon = firstPokemon.pokemon_id;
    user.player_pokemon1 = pokemon1.pokemon_id;
    user.player_pokemon2 = pokemon2.pokemon_id;
    user.player_pokemon3 = pokemon3.pokemon_id;
    user.player_pokemon4 = pokemon4.pokemon_id;
    user.player_pokemon5 = pokemon5.pokemon_id;
    user.player_pokemon6 = pokemon6.pokemon_id;
}

function setNewOponentPokemon(pokemon) {
    if (pokemonOponent1.pokemon_id == null) {
        pokemonOponent1 = pokemon;
        pokemonImgOponenent1.src = pokemon.pokemon_sprites_front;
    }
    else if (pokemonOponent2.pokemon_id == null) {
        pokemonOponent2 = pokemon;
        pokemonImgOponenent2.src = pokemon.pokemon_sprites_front;
    }
    else if (pokemonOponent3.pokemon_id == null) {
        pokemonOponent3 = pokemon;
        pokemonImgOponenent3.src = pokemon.pokemon_sprites_front;
    }
    else if (pokemonOponent4.pokemon_id == null) {
        pokemonOponent4 = pokemon;
        pokemonImgOponenent4.src = pokemon.pokemon_sprites_front;
    }
    else if (pokemonOponent5.pokemon_id == null) {
        pokemonOponent5 = pokemon;
        pokemonImgOponenent5.src = pokemon.pokemon_sprites_front;
    }
    else if (pokemonOponent6.pokemon_id == null) {
        pokemonOponent6 = pokemon;
        pokemonImgOponenent6.src = pokemon.pokemon_sprites_front;
    }
    pokemonsOponent.push(pokemon);
}

export function enableTurn() {
    for (let index = 0; index < pokeballs.length; index++) {
        pokeballs[index].addEventListener("click", changeEvent)
    }
    habilitat1.disabled = false;
    habilitat2.disabled = false;
    habilitat3.disabled = false;
    habilitat4.disabled = false;
}

function disableTurn() {
    for (let index = 0; index < pokeballs.length; index++) {
        pokeballs[index].removeEventListener("click", changeEvent);
    }
    habilitat1.disabled = true;
    habilitat2.disabled = true;
    habilitat3.disabled = true;
    habilitat4.disabled = true;
}

function attack(){

    
}