"use strict";
const ge = require('./lib/api/ge');
const request = require('request');

let findItem = new ge(1);
findItem.itemInfo("Cannonball");