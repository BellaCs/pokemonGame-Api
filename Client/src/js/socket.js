import "../../node_modules/socket.io-client/dist/socket.io.js"

const socket = io("ws://localhost:3000");


socket.connect();

socket.on('connect', function () {

    console.log("connected \n");

});

export var pedirPokemons = (userName)  => new Promise(resolve =>{

    socket.emit("pedirPokemon", "userName", function(pokeJson, si){
        resolve(pokeJson)
    });

})

socket.on('disconnect', function () {
    console.log('disconnected');
});

