"use strict";

const util = require("../util/util");
const config = require("../config");
const request = require("request-promise");

function grandExchange(options) {
    this.itemInfo = function (item) {
        return new Promise((resolve, reject) => {
            if (typeof (item) == "number") {
                request.get(config.ge.urls.information + item).then(resolve).catch(reject);
            } else if (typeof (item) == "string") {
                util.findItemByName(item).then((itemId) => {
                    request.get(config.ge.urls.information + itemId).then(resolve).catch(reject);
                });
            }
            else {
                reject("Item must be a string or integer");
            }
        });
    }
}

module.exports = grandExchange;