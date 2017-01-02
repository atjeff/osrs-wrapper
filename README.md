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
    .then(player => {
        console.log(JSON.stringify(player, null, 2));
    });
```
Again, but with Hardcore Ironman Hiscores
```javascript
const osrs = require("osrs-wrapper");

osrs.hiscores.getPlayer("Buy Tayrocs", "Hardcore")
    .then(player => {
        console.log(JSON.stringify(player, null, 2));
    });
```

Output: 
```json
{
  "Skills": {
    "Overall": {
      "rank": 1486,
      "level": 1007,
      "xp": 4250647
    },
    "Attack": {
      "rank": 2351,
      "level": 50,
      "xp": 102206
    },
    "Defence": {
      "rank": 2435,
      "level": 44,
      "xp": 58769
    },
    "Strength": {
      "rank": 2537,
      "level": 49,
      "xp": 99642
    },
    "Hitpoints": {
      "rank": 2084,
      "level": 53,
      "xp": 145405
    },
    "Ranged": {
      "rank": 2965,
      "level": 40,
      "xp": 37236
    },
    "Prayer": {
      "rank": 1553,
      "level": 43,
      "xp": 54812
    },
    "Magic": {
      "rank": 232,
      "level": 68,
      "xp": 662199
    },
    "Cooking": {
      "rank": 8615,
      "level": 35,
      "xp": 23029
    },
    "Woodcutting": {
      "rank": 6268,
      "level": 47,
      "xp": 80076
    },
    "Fletching": {
      "rank": 5425,
      "level": 27,
      "xp": 10670
    },
    "Fishing": {
      "rank": 8374,
      "level": 39,
      "xp": 36137
    },
    "Firemaking": {
      "rank": 5897,
      "level": 46,
      "xp": 72190
    },
    "Crafting": {
      "rank": 1067,
      "level": 51,
      "xp": 113581
    },
    "Smithing": {
      "rank": 2729,
      "level": 39,
      "xp": 37104
    },
    "Mining": {
      "rank": 2573,
      "level": 49,
      "xp": 92260
    },
    "Herblore": {
      "rank": 2153,
      "level": 23,
      "xp": 6840
    },
    "Agility": {
      "rank": 83,
      "level": 78,
      "xp": 1691858
    },
    "Thieving": {
      "rank": 4763,
      "level": 39,
      "xp": 37219
    },
    "Slayer": {
      "rank": 5415,
      "level": 9,
      "xp": 1000
    },
    "Farming": {
      "rank": 2910,
      "level": 17,
      "xp": 3500
    },
    "Runecrafting": {
      "rank": 76,
      "level": 48,
      "xp": 87920
    },
    "Hunter": {
      "rank": 349,
      "level": 70,
      "xp": 746365
    },
    "Construction": {
      "rank": 333,
      "level": 43,
      "xp": 50629
    }
  },
  "Minigames": {
    "Bounty_Hunter": {
      "rank": -1,
      "score": -1
    },
    "Bounty_Hunter_Rogues": {
      "rank": -1,
      "score": -1
    },
    "LMS": {
      "rank": -1,
      "score": -1
    }
  }
}

```
##### getPlayers(usernames, type)
Used to lookup multiple players skills and minigame stats. 
"usernames" Accepts:
* Array of usernames:
```json
["King Bulvi", "Macca P"]
```
* Array of Objects:
```
[{
  "username": "King Bulvi" //type defaults to normal
},{
  "username": "Macca P",
  "type": "normal"
},
{
  "username": "Buy Tayrocs",
  "type": "hardcore"
}]
```
"type" Accepts:
* Normal (Default)
* Ironman
* Hardcore Ironman
* Ultimate Ironman
* Deadman
* Deadman Seasonal

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
    .then(item => {
        console.log(item);
    });
```
Again, but with the Item Name:
```javascript
const osrs = require("osrs-wrapper");

osrs.ge.getItem("Abyssal Whip")
    .then(item => {
        console.log(item);
    });
```

Output: 
```json
"item":{
    "id":4151,
    "icon":"http://services.runescape.com/m=itemdb_oldschool/1482156083699_obj_sprite.gif?id=4151",
    "icon_large":"http://services.runescape.com/m=itemdb_oldschool/1482156083699_obj_big.gif?id=4151",
    "type":"Default",
    "typeIcon":"http://www.runescape.com/img/categories/Default",
    "name":"Abyssal whip",
    "description":"A weapon from the abyss.",
    "current": {
        "trend":"neutral",
        "price":"1.8m"
    },
    "today": {
        "trend":"negative",
        "price":"- 828"
    },
    "members":"true",
    "day30": {
        "trend":"positive",
        "change":"+13.0%"
    },
    "day90": {
        "trend":"positive",
        "change":"+5.0%"
    },
    "day180": {
        "trend":"negative",
        "change":"-18.0%"
    }
}
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
    .then(item => {
        console.log(item);
    });
```
Again, but with the Item Name:
```javascript
const osrs = require("osrs-wrapper");

osrs.ge.getGraph("Fire Rune")
    .then(item => {
        console.log(item);
    });
```

##### getItems(items)
Used to lookup an item's price, category and price trend.
"items" Accepts:
* Array of items (Item Name or ItemID):
```json
["Abyssal Whip", 2]
```
Example:
```javascript
const osrs = require("osrs-wrapper");

osrs.ge.getItems(["Abyssal Whip", 2])
    .then(items => {
        console.log(JSON.parse(items));
    });
```

## License
`osrs-wrapper` is under the [MIT](http://opensource.org/licenses/MIT) license, see the `LICENSE` file for the copyright information and licensing terms.