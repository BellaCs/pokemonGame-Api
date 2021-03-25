const movementsDB = require("../extra/movements.database");

exports.getMovements = (pokemon_id, result) => {
    var movements = [];
        movementsDB.movmentsByPokemonId(pokemon_id,(error, results) =>{
            if(error == null){
                results.forEach(element => {
                    movements.push(element.movement_id);
                });
                result(null, movements);
                return;
            } else{ 
                console.log(error, null);
                result(error);
                return;
            }
            
        });                 
    
    
};

