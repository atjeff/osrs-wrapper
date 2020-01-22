export interface ItemDetailResponse {
    item: Item;
}

export interface Item {
    id: number;
    name: string;
    description: string;
    icon: string;
    icon_large: string;
    type: string;
    typeIcon: string;
    members: string;
    current: PriceTrend;
    today: PriceTrend;
    day30: PriceTrend;
    day90: PriceTrend;
    day180: PriceTrend;
}

export interface PriceTrend {
    trend: string;
    price: string;
}

export interface ExchangeGraph {
    daily: GraphPoints;
    average: GraphPoints;
}

export interface GraphPoints {
    [key: string]: number;
}
