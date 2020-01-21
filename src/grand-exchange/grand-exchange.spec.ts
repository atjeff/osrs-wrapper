import { request } from 'gaxios';
import { mockItemResponse } from '../../test/item-response.mock';
import { getExchangeStats, getExchangeTrendGraph } from './grand-exchange.module';

jest.mock('gaxios');

describe('Grand Exchange', () => {
    const itemId = 4151;
    const mockedSuccessfulResponse = { data: mockItemResponse } as any;
    let mockedGaxiosRequest = request as jest.MockedFunction<typeof request>;

    mockedGaxiosRequest.mockResolvedValue(mockedSuccessfulResponse);

    afterEach(() => mockedGaxiosRequest.mockClear());
    afterAll(() => jest.unmock('gaxios'));

    describe('getExchangeStats', () => {
        it('should make a GET request', async () => {
            await getExchangeStats(itemId);

            expect(mockedGaxiosRequest.mock.calls[0][0]).toMatchObject({
                method: 'GET'
            });
        });

        it('should make a request with the passed in itemId', async () => {
            await getExchangeStats(itemId);

            expect(mockedGaxiosRequest.mock.calls[0][0]).toMatchObject({
                method: 'GET',
                url: 'http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json',
                params: {
                    item: itemId
                }
            });
        });

        it('should return the item key from the response', async () => {
            const output = await getExchangeStats(itemId);

            expect(output).toEqual(mockItemResponse.item);
        });
    });

    describe('getExchangeTrendGraph', () => {
        it('should make a GET request', async () => {
            await getExchangeTrendGraph(itemId);

            expect(mockedGaxiosRequest.mock.calls[0][0]).toMatchObject({
                method: 'GET'
            });
        });

        it('should make a request with the passed in itemId', async () => {
            await getExchangeTrendGraph(itemId);

            expect(mockedGaxiosRequest.mock.calls[0][0]).toMatchObject({
                method: 'GET',
                url: `http://services.runescape.com/m=itemdb_oldschool/api/graph/${itemId}.json`
            });
        });

        it('should return the response', async () => {
            const output = await getExchangeTrendGraph(itemId);

            expect(output).toEqual(mockItemResponse);
        });
    });
});
