export type ClassCode = 0 | 1 | 2 | 3

export const ClassCode = 
{
    [ 0 ] : {name: "Name", type: "Warrior", level: 105, mage: "Mental"},
    [ 1 ] : {name: "Name", type: "Ninja", level: 105, mage: "Archer"},
    [ 2 ] : {name: "Name", type: "Sura", level: 105, mage: "Mage"},
    [ 3 ] : {name: "Name", type: "Shaman", level: 105, mage: "Light"}
}

export interface BestPlayerInfoProps
{
    readonly code : ClassCode
}