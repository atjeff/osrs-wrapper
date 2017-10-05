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
                }).catch(reject);
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

    /*
     * Get an items current price, category, and price trend for last month, 3 months, 6 months as well as images.
     *
     * @param  itemsArr array of Item IDs or Names
     */
    this.getItems = (items) => {
        return new Promise((resolve, reject) => {
            if (typeof (items) == "number" || typeof (items) == "string") {
                reject(new Error("Items must be an array"));
            } 
            else if (typeof (items) == "object") {
                let itemsArr = [];
                let promiseStack = [];
                for (var i = 0; i < items.length; i++) {
                    promiseStack.push(this.getItem(items[i]));
                }
                Promise.all(promiseStack).then(values => {
                    for (i = 0; i < values.length; i++) {
                        itemsArr[i] = values[i];
                    }
                    resolve(itemsArr);
                }).catch(reject);
            }
        });
    }
}

module.exports = grandExchange;