"use strict";

const GrandExchange = require('./lib/ge/ge');
const Hiscores = require('./lib/hiscores/hiscores');

module.exports = {
    ge: new GrandExchange(),
    hiscores: new Hiscores()
}