import { BossName, MinigameName, SkillName } from './hiscores.constants'

export type HiscoreSkill = {
  id: number
  name: SkillName
  rank: number
  level: number
  xp: number
}

export type HiscoreActivity = {
  id: number
  name: MinigameName | BossName
  rank: number
  score: number
}

export type HiscoreResponse = {
  skills: HiscoreSkill[]
  activities: HiscoreActivity[]
}

export interface Player {
  skills: Skills
  minigames: Minigames
  bosses: Bosses
}

export interface Skill {
  rank: number
  level: number
  xp: number
}

export interface Minigame {
  rank: number
  score: number
}

export interface Boss {
  rank: number
  kills: number
}

export type Skills = Record<SkillName, Skill>
export type Minigames = Record<MinigameName, Minigame>
export type Bosses = Record<BossName, Boss>
