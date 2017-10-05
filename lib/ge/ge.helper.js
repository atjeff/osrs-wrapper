"use strict";

const items = require("../items");

let findItemByName = (itemName) => {
    return new Promise((resolve, reject) => {
        if (typeof (itemName) != "number" && typeof (itemName) != "string") {
            reject("Item must be a string or integer");
        } 
        else {
            if (typeof (itemName) == "number") {
                resolve(itemName);
            } 
            else if (typeof (itemName) == "string") {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].name.toLowerCase() === itemName.toLowerCase()) {
                        resolve(items[i].id);
                    }
                }
                reject(new Error("Item name not found"));
            }
            else {
                reject(new Error("Item name not found"));
            }
        }
    });
};

module.exports = {
    findItemByName: findItemByName
}