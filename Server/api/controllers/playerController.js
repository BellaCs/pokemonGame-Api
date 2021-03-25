const player = require("../models/player.database");

exports.create_player = function(req, res){
    let playerInfo = player(req.body);
    if(playerInfo == null){res.sendStatus(400)}
    player.create(playerInfo, result =>{
        if (result != undefined) {
            let playerId = {
                "playerId" : result
            }
            res.json(playerId);
        } else {
            res.sendStatus(404);
        }
        return;
    });
}