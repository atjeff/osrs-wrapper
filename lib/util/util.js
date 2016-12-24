"use strict";


let csvToJson = (data) => {
    return new Promise((resolve, reject) => {
        let jsonArr = data.split("\n").map((str) => {
            return str.split(',');
        });
        resolve(jsonArr);
    });
}

module.exports = {
    csvToJson: csvToJson
}