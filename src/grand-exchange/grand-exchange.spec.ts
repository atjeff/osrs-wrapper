import { afterAll, afterEach, beforeEach, describe, expect, it, spyOn } from 'bun:test'
import { mockExchangeGraph, mockItemResponse } from '../../test/item-response.mock'
import { getExchangeStats, getExchangeTrendGraph } from './grand-exchange.module'

const spyFetch = spyOn(globalThis, 'fetch')

beforeEach(() => {
  spyFetch.mockReset()
})
afterEach(() => spyFetch.mockClear())
afterAll(() => spyFetch.mockRestore())

describe('Grand Exchange', () => {
  const itemId = 4151

  describe('getExchangeStats', () => {
    beforeEach(() => {
      const mockedSuccessfulResponse = {
        ok: true,
        json: () => Promise.resolve(mockItemResponse),
      } as any
      spyFetch.mockResolvedValue(mockedSuccessfulResponse)
    })

    it('should make a GET request', async () => {
      await getExchangeStats(itemId)

      expect(spyFetch.mock.calls[0][0]).toMatchInlineSnapshot(
        `"http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=4151"`
      )
    })

    it('should make a request with the passed in itemId', async () => {
      await getExchangeStats(itemId)

      expect(spyFetch.mock.calls[0][0]).toMatchInlineSnapshot(
        `"http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=4151"`
      )
    })

    it('should return the item key from the response', async () => {
      const output = await getExchangeStats(itemId)

      expect(output).toEqual(mockItemResponse.item)
    })
  })

  describe('getExchangeTrendGraph', () => {
    beforeEach(() => {
      const mockGraphResponse = {
        ok: true,
        json: () => Promise.resolve(mockExchangeGraph),
      } as any
      spyFetch.mockResolvedValue(mockGraphResponse)
    })

    it('should make a GET request', async () => {
      await getExchangeTrendGraph(itemId)

      expect(spyFetch.mock.calls[0][0]).toMatchInlineSnapshot(
        `"http://services.runescape.com/m=itemdb_oldschool/api/graph/4151.json"`
      )
    })

    it('should make a request with the passed in itemId', async () => {
      await getExchangeTrendGraph(itemId)

      expect(spyFetch.mock.calls[0][0]).toMatchInlineSnapshot(
        `"http://services.runescape.com/m=itemdb_oldschool/api/graph/4151.json"`
      )
    })

    it('should return the response', async () => {
      const output = await getExchangeTrendGraph(itemId)

      expect(output).toEqual(mockExchangeGraph)
    })
  })
})
