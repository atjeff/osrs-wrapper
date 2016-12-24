# Osrs-Wrapper
Simple wrapper around the [Old School Runescape](http://oldschool.runescape.com/) API

### Dependencies
* [Request](https://www.npmjs.com/package/request)
* [Request-Promise](https://www.npmjs.com/package/request-promise)

### Installation 
```
$ npm install --save osrs-wrapper
```

## Usage

This wrapper interacts with the following Old-School APIs:
* Hiscores
* Grand Exchange

#### Hiscores
##### getPlayer(username, type)
Used to lookup a players skills and minigame stats.  Accepts:
* Normal (Default)
* Ironman
* Hardcore Ironman
* Ultimate Ironman
* Deadman
* Deadman Seasonal

An example of getting a player's hiscore data:
```javascript
const osrs = require("osrs-wrapper");

osrs.hiscores.getPlayer("Macca P")
    .then((player) => {
        console.log(JSON.stringify(player, null, 2));
    });
```
Again, but with Hardcore Ironman Hiscores
```javascript
const osrs = require("osrs-wrapper");

osrs.hiscores.getPlayer("Buy Tayrocs, "Hardcore")
    .then((player) => {
        console.log(JSON.stringify(player, null, 2));
    });
```
#### Grand Exchange
##### getItem(item)
Used to lookup an item's price, category and price trend.
Accepts:
* Item ID (integer)
* Item Name (string)

An example of getting an item's data by Item ID:
```javascript
const osrs = require("osrs-wrapper");

osrs.ge.getItem(4151)
    .then((item) => {
        console.log(item);
    });
```
Again, but with the Item Name:
```javascript
const osrs = require("osrs-wrapper");

osrs.ge.getItem("Abyssal Whip")
    .then((item) => {
        console.log(item);
    });
```
##### getGraph(item)
Get's item's graph data for last 6 months.
Accepts:
* Item Id (integer)
* Item Name (string)

An example of getting an item's data by Item ID:
```javascript
const osrs = require("osrs-wrapper");

osrs.ge.getGraph(554)
    .then((item) => {
        console.log(item);
    });
```
Again, but with the Item Name:
```javascript
const osrs = require("osrs-wrapper");

osrs.ge.getGraph("Fire Rune")
    .then((item) => {
        console.log(item);
    });
```

## License
`osrs-wrapper` is under the [MIT](http://opensource.org/licenses/MIT) license, see the `LICENSE` file for the copyright information and licensing terms.