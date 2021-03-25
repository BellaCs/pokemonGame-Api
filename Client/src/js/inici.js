import * as api from "./api.js";

export var pokemons=[];

var  jugar_btn, 
        text_input, 
        user = {player_nickname : ""};

window.onload = function(){
    randomPokemons();
    getDOMElements();
    addEventListeners();
}

function getDOMElements(){
    jugar_btn = document.getElementById("jugar");
    text_input = document.getElementById("nick");
}

function addEventListeners(){
    jugar_btn.addEventListener("click", goToPlay);
}

function goToPlay(event){
    console.log(text_input.value);
    
    if (text_input.value != "") {
        user.nick = text_input.value;       
        console.log(user); 
        localStorage.setItem("userName", user);
        window.location.href="index.html";
    } else {
        alert("Abans de jugar has de posar un User Name")
        event.preventDefault();
    }
    
}
function randomPokemons(){
    for (let i = 0; i < 6; i++) {
        let pokemonId = Math.floor(Math.random() * 151 + 1);
        api.getPokemon(pokemonId, result =>{
            pokemons.push(result)
        })
      }
    
}
