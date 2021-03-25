const game = require("../models/game.database");

exports.create_game = (req, res) => {
    let gameInfo = game(req.body);
    if(gameInfo == null){res.sendStatus(400)}
    game.create(gameInfo, result =>{
        if (result != undefined) {
            let gameId = {
                "gameId" : result
            }
            res.json(gameId);
        } else {
            res.sendStatus(404);
        }
        return;
    });
};