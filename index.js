"use strict";
const GrandExchange = require('./lib/ge/ge');
const Hiscores = require('./lib/hiscores/hiscores');
const request = require('request');


let ge = new GrandExchange();
let hiscores = new Hiscores();

hiscores.getPlayer("buy tayrocs", "hardcore")
    .then((itemData) => {
        console.log(itemData);
    });


/*ge.itemInfo("Bronze Bar")
    .then((itemData) => {
        console.log(itemData);
    });*/

/*ge.graphData(2)
    .then((graph) => {
        console.log(graph);
    });*/