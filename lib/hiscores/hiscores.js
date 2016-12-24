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
            request.get(config[type.toLowerCase()] + encodeURIComponent(username)).then((response) => {
                util.csvToJson(response)
                    .then((playerData) => {
                        var player = {
                            Skills: helper.mapSkills(playerData),
                            Minigames: helper.mapMinigames(playerData)
                        }
                        resolve(player);
                    }).catch(reject);
            });
        })
    }
}

module.exports = hiscores;