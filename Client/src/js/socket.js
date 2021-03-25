import "../../node_modules/socket.io-client/dist/socket.io.js";
import * as gameMap from "./poke.js";

const socket = io("ws://172.24.19.11:3500");

var partidaId,userId;

socket.connect();

socket.on('connect', function () {

    socket.emit("attackEvent", function(daño_final, si){
        console.log(daño_final);
    });


    socket.on('disconnect', () => {});

});

export var buscarPartida = (user, result) =>  {
   
    socket.emit("buscaPartida", user, function(partida_id, playerId) {
        console.log(partida_id);
        partidaId = partida_id;
        userId = playerId;
        setListenersWithIds();
        result("Cercant partida...");
    });

}

function setListenersWithIds(){

    socket.on("gameFound:" + partidaId, (data) => {
        changePokemonOnDOM(data.jugador_1, data.jugador_1_first_pokemon);
        changePokemonOnDOM(data.jugador_2, data.jugador_2_first_pokemon);
        setTurn(data.jugador_1);
        gameMap.initGame();
    });

    socket.on("changeEvent:" + partidaId, (data) => {});

    socket.on("attackEvent:" + partidaId, (data) => {});

    socket.on("fiPartida:" + partidaId, (data) => {});
}

function changePokemonOnDOM(user_id, pokemonId){
    if(userId == user_id){
        gameMap.cambiarPokemon(pokemonId);
    } else {
        gameMap.cambiarPokemonOponent(pokemonId);
    }

}

function setTurn(playerId){
    if(userId == playerId){
        gameMap.enableTurn();
    } 
}



