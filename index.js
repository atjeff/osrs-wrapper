"use strict";
const GrandExchange = require('./lib/api/ge');
const request = require('request');
let ge = new GrandExchange(1);


/*ge.itemInfo(2)
    .then((itemData) => {
        console.log(itemData);
    });
*/
/*ge.graphData(2)
    .then((graph) => {
        console.log(graph);
    });*/

ge.categoryPrices(0,'a',1).then((graph) => {
        console.log(graph);
    });