"use strict";
const GrandExchange = require('./lib/api/ge');
const request = require('request');
let ge = new GrandExchange(1);


ge.itemInfo(2)
    .then((item) => {
        console.log(item);
    });