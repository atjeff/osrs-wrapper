export interface Player {
    skills: Skills;
    minigames: Minigames;
    bosses: Bosses;
}

export interface Skills {
    overall: Skill;
    attack: Skill;
    defence: Skill;
    strength: Skill;
    hitpoints: Skill;
    ranged: Skill;
    prayer: Skill;
    magic: Skill;
    cooking: Skill;
    woodcutting: Skill;
    fletching: Skill;
    fishing: Skill;
    firemaking: Skill;
    crafting: Skill;
    smithing: Skill;
    mining: Skill;
    herblore: Skill;
    agility: Skill;
    thieving: Skill;
    slayer: Skill;
    farming: Skill;
    runecrafting: Skill;
    hunter: Skill;
    construction: Skill;
}

export interface Skill {
    rank: string;
    level: string;
    xp: string;
}

export interface Minigames {
    League_Points: Minigame;
    Bounty_Hunter: Minigame;
    Bounty_Hunter_Rogues: Minigame;
    Clue_Scrolls_All: Minigame;
    Clue_Scrolls_Beginner: Minigame;
    Clue_Scrolls_Easy: Minigame;
    Clue_Scrolls_Medium: Minigame;
    Clue_Scrolls_Hard: Minigame;
    Clue_Scrolls_Elite: Minigame;
    Clue_Scrolls_Master: Minigame;
    LMS: Minigame;
}

export interface Minigame {
    rank: string;
    score: string;
}

export interface Bosses {
    Abyssal_Sire: Boss;
    Alchemical_Hydra: Boss;
    Barrows_Chests: Boss;
    Bryophyta: Boss;
    Callisto: Boss;
    Cerberus: Boss;
    Chambers_Of_Xeric: Boss;
    Chambers_Of_Xeric_Challenge_Mode: Boss;
    Chaos_Elemental: Boss;
    Chaos_Fanatic: Boss;
    Commander_Zilyana: Boss;
    Corporeal_Beast: Boss;
    Crazy_Archaeologist: Boss;
    Dagannoth_Prime: Boss;
    Dagannoth_Rex: Boss;
    Dagannoth_Supreme: Boss;
    Deranged_Archaeologist: Boss;
    General_Graardor: Boss;
    Giant_Mole: Boss;
    Grotesque_Guardians: Boss;
    Hespori: Boss;
    Kalphite_Queen: Boss;
    King_Black_Dragon: Boss;
    Kraken: Boss;
    Kreearra: Boss;
    Kril_Tsutsaroth: Boss;
    Mimic: Boss;
    Obor: Boss;
    Sarachnis: Boss;
    Scorpia: Boss;
    Skotizo: Boss;
    Gauntlet: Boss;
    Corrupted_Gauntlet: Boss;
    Theatre_Of_Blood: Boss;
    Thermonuclear_Smoke_Devil: Boss;
    Tz_Kal_Zuk: Boss;
    Tz_Tok_Jad: Boss;
    Venenatis: Boss;
    Vetion: Boss;
    Vorkath: Boss;
    Wintertodt: Boss;
    Zalcano: Boss;
    Zulrah: Boss;
}

export interface Boss {
    rank: string;
    kills: string;
}
