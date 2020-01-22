# Osrs-Wrapper
Simple wrapper around the [Old School Runescape](http://oldschool.runescape.com/) API

## Dependencies
* [gaxios](https://www.npmjs.com/package/gaxios)

## Installation 
```
$ npm install --save osrs-wrapper
```

## Usage
This wrapper interacts with the following Old-School APIs:
* Hiscores
* Grand Exchange

## Api Reference

### **getHiscores**
```ts
import { getHiscores } from 'osrs-wrapper';

const stats = await getHiscores('Bald')
// { Overall: { rank: '94441', level: '1969', xp: '93090113' }, Attack: { rank: '226496', level: '91', xp: '6226771' } ... }
```

### **getExchangeStats**
```ts
import { getExchangeStats } from 'osrs-wrapper';

const itemStats = await getExchangeStats(4151);
// { id: 4151, name: 'Abyssal whip', description: 'A weapon from the abyss.', current: {  trend: 'neutral', price: '2.7m' } ... }
```

### **getExchangeTrendGraph**
```ts
import { getExchangeTrendGraph } from 'osrs-wrapper';

const itemGraph = await getExchangeTrendGraph(4151);
// { daily: { '1564099200000': 2534129, ... } average: { '1564099200000': 2564308, ... } }
```

## License
`osrs-wrapper` is under the [MIT](http://opensource.org/licenses/MIT) license.