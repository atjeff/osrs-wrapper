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
    leaguePoints: Minigame;
    bountyHunter: Minigame;
    bountyHunterRogues: Minigame;
    bountyHunterLegacy: Minigame;
    bountyHunterRoguesLegacy: Minigame;
    clueScrollsAll: Minigame;
    clueScrollsBeginner: Minigame;
    clueScrollsEasy: Minigame;
    clueScrollsMedium: Minigame;
    clueScrollsHard: Minigame;
    clueScrollsElite: Minigame;
    clueScrollsMaster: Minigame;
    lms: Minigame;
    pvpArena: Minigame;
    soulWarsZeal: Minigame;
    riftsClosed: Minigame;
}

export interface Minigame {
    rank: string;
    score: string;
}

export interface Bosses {
    abyssalSire: Boss;
    alchemicalHydra: Boss;
    artio: Boss;
    barrowsChests: Boss;
    bryophyta: Boss;
    callisto: Boss;
    calvarion: Boss;
    cerberus: Boss;
    chambersOfXeric: Boss;
    chambersOfXericChallengeMode: Boss;
    chaosElemental: Boss;
    chaosFanatic: Boss;
    commanderZilyana: Boss;
    corporealBeast: Boss;
    crazyArchaeologist: Boss;
    dagannothPrime: Boss;
    dagannothRex: Boss;
    dagannothSupreme: Boss;
    derangedArchaeologist: Boss;
    generalGraardor: Boss;
    giantMole: Boss;
    grotesqueGuardians: Boss;
    hespori: Boss;
    kalphiteQueen: Boss;
    kingBlackDragon: Boss;
    kraken: Boss;
    kreearra: Boss;
    krilTsutsaroth: Boss;
    mimic: Boss;
    nex: Boss;
    nightmare: Boss;
    phosanisNightmare: Boss;
    obor: Boss;
    phantomMuspah: Boss;
    sarachnis: Boss;
    scorpia: Boss;
    skotizo: Boss;
    spindel: Boss;
    tempoross: Boss;
    gauntlet: Boss;
    corruptedGauntlet: Boss;
    theatreOfBlood: Boss;
    theatreOfBloodHardMode: Boss;
    thermonuclearSmokeDevil: Boss;
    tombsOfAmascut: Boss;
    tombsOfAmascutExpertMode: Boss;
    tzKalZuk: Boss;
    tzTokJad: Boss;
    venenatis: Boss;
    vetion: Boss;
    vorkath: Boss;
    wintertodt: Boss;
    zalcano: Boss;
    zulrah: Boss;
}

export interface Boss {
    rank: string;
    kills: string;
}
