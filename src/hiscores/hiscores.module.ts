import { HiscoreTypes } from './hiscore-types.enum'
import {
  BOSS_NAMES,
  BossName,
  MINIGAME_NAMES,
  MinigameName,
  SKILL_NAMES,
  SkillName,
} from './hiscores.constants'
import { HiscoreResponse, Player } from './player.model'

/**
 * Fetches player hiscores for specified game type. Includes Skills, Minigames, and Boss kill counts.
 *
 * @export
 * @param {string} username
 * @param {HiscoreTypes} [type=HiscoreTypes.normal]
 * @returns {Promise<Player>}
 */
export async function getHiscores(
  username: string,
  type: HiscoreTypes = HiscoreTypes.normal
): Promise<Player> {
  const response = await fetch(
    `http://services.runescape.com/m=${type}/index_lite.json?player=${encodeURIComponent(username)}`
  )

  if (!response.ok) {
    console.error(`Failed to fetch hiscores for ${username}`, await response.text())
    throw new Error(`Failed to fetch hiscores for ${username}`)
  }

  const data = (await response.json()) as HiscoreResponse

  const player = {
    skills: {},
    minigames: {},
    bosses: {},
  } as Player

  for (const skill of data.skills) {
    const { rank, level, xp, name } = skill

    const skillName = SKILL_NAMES[name as keyof typeof SKILL_NAMES] as SkillName
    player.skills[skillName] = { rank, level, xp }
  }

  for (const activity of data.activities) {
    const { rank, score, name } = activity

    if (isMinigameName(name)) {
      const minigameName = MINIGAME_NAMES[name] as MinigameName
      player.minigames[minigameName] = { rank, score }
    }

    if (isBossName(name)) {
      const bossName = BOSS_NAMES[name] as BossName
      player.bosses[bossName] = { rank, kills: score }
    }
  }

  return player
}

function isMinigameName(name: string): name is keyof typeof MINIGAME_NAMES {
  return name in MINIGAME_NAMES
}

function isBossName(name: string): name is keyof typeof BOSS_NAMES {
  return name in BOSS_NAMES
}
