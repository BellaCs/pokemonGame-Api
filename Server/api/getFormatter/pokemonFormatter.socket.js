const pokemonDB = require("../models/pokemon.database");
const movementsFormatter = require("../getFormatter/movementsFormatter.socket");
const movementFormatter = require("../getFormatter/movementFormatter.socket");


class pokemonFormatToClient {
    constructor(pokemon) {
        this.pokemon_id = pokemon.pokemon_id;
        this.pokemon_name = pokemon.pokemon_name;
        this.pokemon_stats_hp = pokemon.pokemon_stats_hp;
        this.pokemon_stats_speed = pokemon.pokemon_stats_speed;
        this.pokemon_sprites_front = pokemon.pokemon_sprites_front;
        this.pokemon_sprites_back = pokemon.pokemon_sprites_back;
        this.atacs = [];
        return this;
    }
}

class pokemonFormatToClientOponent {
    constructor(pokemon) {
        this.pokemon_id = pokemon.pokemon_id;
        this.pokemon_name = pokemon.pokemon_name;
        this.pokemon_stats_hp = pokemon.pokemon_stats_hp;
        this.pokemon_sprites_front = pokemon.pokemon_sprites_front;
        return this;
    }
}

exports.getPokemonByIdToClient = (pokemonId, response) => {
    var pokemon, posibleMoves;
    pokemonDB.findById(pokemonId, (error, result) => {
        if (error == null) {
            pokemon = new pokemonFormatToClient(result);
            console.log("Pokemon: " + pokemon);
            movementsFormatter.getMovements(pokemonId, (error, result) => {
                if (error == null) {
                    posibleMoves = result;
                    movementFormatter.getMovementToClient(posibleMoves[0], (error, result) => {
                        if (error == null) {
                            pokemon.atacs.push(result);
                            movementFormatter.getMovementToClient(posibleMoves[1], (error, result) => {
                                if (error == null) {
                                    pokemon.atacs.push(result);
                                    movementFormatter.getMovementToClient(posibleMoves[2], (error, result) => {
                                        if (error == null) {
                                            pokemon.atacs.push(result);
                                            movementFormatter.getMovementToClient(posibleMoves[3], (error, result) => {
                                                if (error == null) {
                                                    pokemon.atacs.push(result);
                                                    response(pokemon);
                                                } else {
                                                    console.log(error);
                                                    response(error);
                                                    return;
                                                }
                                            });
                                        } else {
                                            console.log(error);
                                            response(error);
                                        }
                                    });
                                } else {
                                    console.log(error);
                                    response(error);
                                }
                            });
                        } else {
                            console.log(error);
                            response(error);
                        }
                    });
                } else {
                    console.log(error);
                    response(error);
                }
            });
        } else {
            console.log(error);
            response(error);
        }
    });
}

exports.getPokemonByIdToClientOponent = (pokemonId, response) => {
    let pokemon;
    pokemonDB.findById(pokemonId, (error, result) => {
        if (error == null) {
            pokemon = new pokemonFormatToClientOponent(result);
            console.log("Pokemon: " + pokemon);
            response(pokemon);
        } else {
            console.log(error);
            response(error);
        }
    });
}
