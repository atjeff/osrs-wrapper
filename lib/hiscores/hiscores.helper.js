"use strict";

const config = require("../config");

let mapSkills = (playerData) => {
    let skillsArr = [];

    return new Promise((resolve, response) => {
        for (var i = 0; i < config.hiscores.skills.length; i++) {
            let skillName = config.hiscores.skills[i];
            skillsArr[skillName] = {
                rank: Number(playerData[i][0]),
                level: Number(playerData[i][1]),
                xp: Number(playerData[i][2])
            }
        }
        resolve(skillsArr);
    });
};

module.exports = {
    mapSkills: mapSkills
}