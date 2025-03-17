import { ExchangeGraph, Item, ItemDetailResponse } from './item.model'

/**
 * Gets Grand Exchange items for specified Item ID.
 * @export
 * @param {number} itemId
 * @returns {Promise<Item>}
 */
export async function getExchangeStats(itemId: number): Promise<Item> {
  const response = await fetch(
    `http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemId}`
  )

  if (!response.ok) {
    console.error(`Failed to fetch exchange stats for ${itemId}`, await response.text())
    throw new Error(`Failed to fetch exchange stats for ${itemId}`)
  }

  const data = (await response.json()) as ItemDetailResponse

  return data.item
}

/**
 * Returns Grand Exchange graph points for specified Item ID.
 *
 * @export
 * @param {number} itemId
 * @returns {Promise<ExchangeGraph>}
 */
export async function getExchangeTrendGraph(itemId: number): Promise<ExchangeGraph> {
  const response = await fetch(
    `http://services.runescape.com/m=itemdb_oldschool/api/graph/${itemId}.json`
  )

  if (!response.ok) {
    console.error(`Failed to fetch exchange trend graph for ${itemId}`, await response.text())
    throw new Error(`Failed to fetch exchange trend graph for ${itemId}`)
  }

  const data = (await response.json()) as ExchangeGraph

  return data
}
