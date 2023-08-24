import { request } from 'gaxios';
import { HiscoreTypes } from './hiscore-types.enum';
import { BOSS_NAMES, MINIGAME_NAMES, SKILL_NAMES } from './hiscores.constants';
import { Bosses, HiscoreResponse, Minigames, Player, Skills } from './player.model';

/**
 * Fetches player hiscores for specified game type. Includes Skills, Minigames, and Boss kill counts.
 *
 * @export
 * @param {string} username
 * @param {HiscoreTypes} [type=HiscoreTypes.normal]
 * @returns {Promise<Player>}
 */
export async function getHiscores(username: string, type: HiscoreTypes = HiscoreTypes.normal): Promise<Player> {
    const { data } = await request<HiscoreResponse>({
        method: 'GET',
        url: `http://services.runescape.com/m=${type}/index_lite.json`,
        params: { player: encodeURIComponent(username) },
    });

    const skills = {} as Skills;
    for (const skill of data.skills) {
        const { rank, level, xp, name } = skill;
        const skillName = SKILL_NAMES[skill.name];
        skills[skillName] = { rank, level, xp };
    }

    const minigames = {} as Minigames;
    const bosses = {} as Bosses;
    for (const activity of data.activities) {
        const { rank, score, name } = activity;

        if (!!MINIGAME_NAMES[name]) {
            minigames[MINIGAME_NAMES[name]] = { rank, score };
        } else if (!!BOSS_NAMES[name]) {
            bosses[BOSS_NAMES[name]] = { rank, kills: score };
        }
    }

    return { skills, minigames, bosses };
}
