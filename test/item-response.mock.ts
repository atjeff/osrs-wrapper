import { ExchangeGraph, ItemDetailResponse } from '../src/grand-exchange/item.model'

export const mockItemResponse = {
  item: {
    icon: 'http://services.runescape.com/m=itemdb_oldschool/1579606762248_obj_sprite.gif?id=4151',
    icon_large:
      'http://services.runescape.com/m=itemdb_oldschool/1579606762248_obj_big.gif?id=4151',
    id: 4151,
    type: 'Default',
    typeIcon: 'http://www.runescape.com/img/categories/Default',
    name: 'Abyssal whip',
    description: 'A weapon from the abyss.',
    current: {
      trend: 'neutral',
      price: '2.7m',
    },
    today: {
      trend: 'negative',
      price: '-11.6k',
    },
    members: 'true',
    day30: {
      trend: 'positive',
      change: '+0.0%',
    },
    day90: {
      trend: 'positive',
      change: '+8.0%',
    },
    day180: {
      trend: 'positive',
      change: '+5.0%',
    },
  },
} satisfies ItemDetailResponse

export const mockExchangeGraph = {
  daily: {
    '1726704000000': 1355404,
    '1726790400000': 1341193,
    '1726876800000': 1339899,
  },
  average: {
    '1726704000000': 1408324,
    '1726790400000': 1404856,
    '1726876800000': 1401299,
  },
} satisfies ExchangeGraph
