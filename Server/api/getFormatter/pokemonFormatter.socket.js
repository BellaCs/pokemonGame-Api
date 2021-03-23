const pokemonDB = require("../models/pokemon.database");
const movementFormatter = require("../getFormatter/movementsFormatter.socket");
function getPokemons(){
    var pokemons = []
    for (let index = 0; index < 6; index++) {
        let pokemon_id = Math.floor(Math.random() * 151);
        pokemonDB.findById(pokemon_id,(error, result) =>{
            if(error == null){
                pokemons.push(JSON.stringify(result));
                console.log("Pokemon: " + result);
            }else{
                console.log(error);
            }
        });           
        pokemons.movements = movementFormatter.getMovements(pokemon_id);  
    }
    return pokemons;
}

module.exports = getPokemons()
