const movementDB = require("../models/movement.database");

function getMovement(movement_id){
    var movement;
        movementDB.findById(movement_id,(error, result) =>{
            if(error == null){
                movement = result;
                console.log("Moviment: " + result);
            }else{
                console.log(error);
            }
        });                 
    return movement;
}

module.exports = getMovement()
