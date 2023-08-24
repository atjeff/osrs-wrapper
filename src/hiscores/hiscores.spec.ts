import { request } from 'gaxios';
import { mockHiscoreResponse } from '../../test/hiscore-response.mock';
import { HiscoreTypes } from './hiscore-types.enum';
import { getHiscores } from './hiscores.module';

jest.mock('gaxios');

describe('Hiscores', () => {
    describe('getHiscores', () => {
        const playerName = 'Bald';
        const mockedSuccessfulResponse = { data: mockHiscoreResponse } as any;
        let mockedGaxiosRequest = request as jest.MockedFunction<typeof request>;

        mockedGaxiosRequest.mockResolvedValue(mockedSuccessfulResponse);

        afterEach(() => mockedGaxiosRequest.mockClear());
        afterAll(() => jest.unmock('gaxios'));

        it('should make a GET request', async () => {
            await getHiscores(playerName);

            expect(mockedGaxiosRequest.mock.calls[0][0]).toMatchSnapshot();
        });

        it('should make a request with the passed in player name', async () => {
            await getHiscores(playerName);

            expect(mockedGaxiosRequest.mock.calls[0][0]).toMatchSnapshot();
        });

        it('should default type to HiscoreTypes.normal', async () => {
            await getHiscores(playerName);

            expect(mockedGaxiosRequest.mock.calls[0][0]).toMatchSnapshot();
        });

        it('should hit the specified hiscore type endpoint', async () => {
            const hiscoreType = HiscoreTypes.league;
            await getHiscores(playerName, hiscoreType);

            expect(mockedGaxiosRequest.mock.calls[0][0]).toMatchSnapshot();
        });

        it('should properly parse rank, level, and xp for each skill', async () => {
            const { skills } = await getHiscores(playerName);

            expect(skills).toMatchSnapshot();
        });

        it('should properly parse rank and score for each minigame', async () => {
            const { minigames } = await getHiscores(playerName);

            expect(minigames).toMatchSnapshot();
        });

        it('should properly parse rank and kills for each boss', async () => {
            const { bosses } = await getHiscores(playerName);

            expect(bosses).toMatchSnapshot();
        });

        it('should return skills, minigames, and bosses from a json response', async () => {
            const output = await getHiscores(playerName);

            expect(output).toMatchSnapshot();
        });
    });
});
