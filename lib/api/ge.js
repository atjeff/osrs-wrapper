"use strict";

const util = require("../util/util"),
      config = require("../config").ge,
      request = require("request-promise");

function grandExchange(options) {
    /*
     * Get an items current price, its price trend over 30, 90, and 180 days as well as its category and image urls.
     *
     * @param  Item ID or Name
     */
    this.itemInfo = (item) => {
        return new Promise((resolve, reject) => {
            if (typeof (item) == "number") {
                request.get(config.urls.information + item).then(resolve).catch(reject);
            } else if (typeof (item) == "string") {
                util.findItemByName(item).then((itemId) => {
                    request.get(config.urls.information + itemId).then(resolve).catch(reject);
                });
            } else {
                reject("Item must be a string or integer");
            }
        });
    }

    /*
     * Return the price information for each day for 180 days.
     *
     * @param  Item ID or Name
     */
    this.graphData = (item) => {
        return new Promise((resolve, reject) => {
            if (typeof (item) == "number") {
                request.get(config.urls.graph + item + ".json").then(resolve).catch(reject);
            } else if (typeof (item) == "string") {
                util.findItemByName(item).then((itemId) => {
                    request.get(config.urls.graph + itemId + ".json").then(resolve).catch(reject);
                });
            } else {
                reject("Item must be a string or integer");
            }
        });
    };
}

module.exports = grandExchange;