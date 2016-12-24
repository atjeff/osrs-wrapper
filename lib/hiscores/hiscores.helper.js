"use strict";

const config = require("../config");

let mapSkills = (playerData) => {
    let skillsObj = {};
    for (var i = 0; i < config.skills.length; i++) {
        let skillName = config.skills[i];
        skillsObj[skillName] = {
            rank: Number(playerData[i][0]),
            level: Number(playerData[i][1]),
            xp: Number(playerData[i][2])
        }
    }
    return skillsObj;
};

let mapMinigames = (playerData) => {
    let minigamesObj = {};
    let skillsLength = config.skills.length;
    for (var i = 0; i < config.minigames.length; i++) {
        let minigame = config.minigames[i];
        minigamesObj[minigame] = {
            rank: Number(playerData[i+skillsLength][0]),
            score: Number(playerData[i+skillsLength][1])
        }
    }
    return minigamesObj;
};

module.exports = {
    mapSkills: mapSkills,
    mapMinigames: mapMinigames
}