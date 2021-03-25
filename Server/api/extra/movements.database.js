const mariadb = require('../config/db.js');
var exports;


exports.movmentsByPokemonId = (PokemonID, result) => {
        mariadb.query("SELECT movement_id FROM pokemon_movement WHERE pokemon_id = " + PokemonID + " LIMIT 4", (err, res) => {
                if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                }

                if (res.length) {
                        console.log("found customer: ", res);
                        result(null, res);
                        return;
                }

                // not found Customer with the id
                result({ kind: "not_found" }, null);
        });
};