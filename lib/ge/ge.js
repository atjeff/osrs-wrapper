"use strict";

const util = require("../util/util"),
      config = require("../config").ge,
      request = require("request-promise"),
      helper = require("./ge.helper");

function grandExchange(options) {
    /*
     * Get an items current price, category, and price trend for last month, 3 months, 6 months as well as images.
     *
     * @param  item Item ID or Name
     */
    this.getItem = (item) => {
        return new Promise((resolve, reject) => {
            if (typeof (item) == "number") {
                request.get(config.information + item).then(resolve).catch(reject);
            } else if (typeof (item) == "string") {
                helper.findItemByName(item).then(itemId => {
                    request.get(config.information + itemId).then(resolve).catch(reject);
                });
            } else {
                reject(new Error("Item must be a string or integer"));
            }
        });
    }

    /*
     * Return the price data for each day for the last 6 months.
     *
     * @param  item Item ID or Name
     */
    this.getGraph = (item) => {
        return new Promise((resolve, reject) => {
            if (typeof (item) == "number") {
                request.get(config.graph + item + ".json").then(resolve).catch(reject);
            } else if (typeof (item) == "string") {
                helper.findItemByName(item).then(itemId => {
                    request.get(config.graph + itemId + ".json").then(resolve).catch(reject);
                });
            } else {
                reject(new Error("Item must be a string or integer"));
            }
        });
    };
}

module.exports = grandExchange;