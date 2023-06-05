import { request } from 'gaxios';
import { ExchangeGraph, Item, ItemDetailResponse } from './item.model';

/**
 * Gets Grand Exchange items for specified Item ID.
 *
 * @export
 * @param {number} itemId
 * @returns {Promise<Item>}
 */
export async function getExchangeStats(itemId: number): Promise<Item> {
    const {
        data: { item },
    } = await request<ItemDetailResponse>({
        method: 'GET',
        url: 'http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json',
        params: { item: itemId },
    });

    return item;
}

/**
 * Returns Grand Exchange graph points for specified Item ID.
 *
 * @export
 * @param {number} itemId
 * @returns {Promise<ExchangeGraph>}
 */
export async function getExchangeTrendGraph(itemId: number): Promise<ExchangeGraph> {
    const { data } = await request<ExchangeGraph>({
        method: 'GET',
        url: `http://services.runescape.com/m=itemdb_oldschool/api/graph/${itemId}.json`,
    });

    return data;
}
