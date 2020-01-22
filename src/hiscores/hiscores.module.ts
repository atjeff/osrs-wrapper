import { request } from 'gaxios';
import { HiscoreTypes } from './hiscore-types.enum';
import { BOSS_NAMES, MINIGAME_NAMES, SKILL_NAMES } from './hiscores.constants';
import { Bosses, Minigames, Player, Skills } from './player.model';

/**
 * Fetches player hiscores for specified game type. Includes Skills, Minigames, and Boss kill counts.
 *
 * @export
 * @param {string} username
 * @param {HiscoreTypes} [type=HiscoreTypes.normal]
 * @returns {Promise<Player>}
 */
export async function getHiscores(username: string, type: HiscoreTypes = HiscoreTypes.normal): Promise<Player> {
    const { data } = await request<string>({
        method: 'GET',
        url: `http://services.runescape.com/m=${type}/index_lite.ws`,
        params: { player: encodeURIComponent(username) }
    });

    const playerData = parseHiscoreCsv(data);

    const skills = SKILL_NAMES.reduce((accumulator: Skills, skillName: string) => {
        const [rank, level, xp] = playerData.shift();

        accumulator[skillName] = { rank, level, xp };

        return accumulator;
    }, {} as Skills);

    const minigames = MINIGAME_NAMES.reduce((accumulator: Minigames, minigameName: string) => {
        const [rank, score] = playerData.shift();

        accumulator[minigameName] = { rank, score };

        return accumulator;
    }, {} as Minigames);

    const bosses = BOSS_NAMES.reduce((accumulator: Bosses, bossName: string) => {
        const [rank, kills] = playerData.shift();

        accumulator[bossName] = { rank, kills };

        return accumulator;
    }, {} as Bosses);

    return { skills, minigames, bosses };
}

/**
 * Parses Hiscore CSV into a 2D Array.
 *
 * @param {string} hiscoreCsv
 * @returns {string[][]}
 */
function parseHiscoreCsv(hiscoreCsv: string): string[][] {
    return hiscoreCsv.split('\n').map((line: string) => line.split(','));
}
