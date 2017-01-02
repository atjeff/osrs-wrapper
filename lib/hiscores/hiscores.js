"use strict";

const util = require("../util/util"),
    config = require("../config").hiscores,
    request = require("request-promise"),
    helper = require("./hiscores.helper");

function hiscores(options) {
    /**
     * Gets a players stats, minigame data
     *
     * @param  player The players name
     * @param  type   [Optional] normal, ironman, hardcore, ultimate, deadman
     */
    this.getPlayer = (username, type) => {
        if (type == null || type == undefined) {
            type = 'normal';
        }
        return new Promise((resolve, reject) => {
            if (typeof (username) != "string") {
                reject(new Error("Username must be a string"));
            }
            request.get(config[type.toLowerCase()] + encodeURIComponent(username)).then(response => {
                util.csvToJson(response)
                    .then(playerData => {
                        var player = {
                            Skills: helper.mapSkills(playerData),
                            Minigames: helper.mapMinigames(playerData)
                        }
                        resolve(player);
                    })
            }).catch(reject);
        });
    }
    /*
     * Gets a players stats, minigame data
     *
     * @param  players The players names
     * @param  type   [Optional] normal, ironman, hardcore, ultimate, deadman
     */
    this.getPlayers = (players, type) => {
        return new Promise((resolve, reject) => {
            let playerObj = {};
            let promiseStack = [];
            for (var i = 0; i < players.length; i++) {
                promiseStack.push(this.getPlayer(players[i].username || players[i], players[i].type || type));
            }
            Promise.all(promiseStack).then(values => {
                for (i = 0; i < values.length; i++) {
                    playerObj[players[i].username || players[i]] = values[i];
                }
                resolve(playerObj);
            }).catch(reject);
        })
    }
}

module.exports = hiscores;