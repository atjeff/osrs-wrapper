export interface ItemDetailResponse {
  item: Item
}

export interface Item {
  id: number
  name: string
  description: string
  icon: string
  icon_large: string
  type: string
  typeIcon: string
  members: string
  current: TrendPrice
  today: TrendPrice
  day30: TrendChange
  day90: TrendChange
  day180: TrendChange
}

export interface TrendPrice {
  trend: 'positive' | 'negative' | 'neutral'
  price: string
}

export type PriceChange = `${number}%`
export type TrendChange = {
  trend: 'positive' | 'negative' | 'neutral'
  change: PriceChange
}

export interface ExchangeGraph {
  daily: GraphPoints
  average: GraphPoints
}

export type GraphPoints = Record<string, number>
