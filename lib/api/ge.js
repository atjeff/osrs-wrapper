"use strict";

const util = require("../util/util");
const config = require("../config");
const request = require("request");

function grandExchange(config) {
    this.itemInfo = function (item) {
        if(typeof(item) == "number") {
            console.log("number");
        }
        else if (typeof(item) == "string") {
            util.findItemByName(item).then((itemId) => {
                request.get("http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=" + itemId, function(error, response, body) {
                   console.log(body);
                })
            }).catch((err) => {
                console.log(err);
            });
        }
    }
}

module.exports = grandExchange;