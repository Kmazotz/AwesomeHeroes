export type TopCode = 0 | 1

export const TopCode =
{
    [ 0 ] : {
        headers: ["#", "NickName", "Class", "Level"],
        list: [
            [1, "Name", "warrior", 105],
            [2, "Name", "ninja", 105],
            [3, "Name", "sura", 105],
            [4, "Name", "shaman", 105],
            [5, "Name", "warrior", 105],
            [6, "Name", "ninja", 105],
            [7, "Name", "sura", 105],
            [8, "Name", "shaman", 105],
            [9, "Name", "warrior", 105],
            [10, "Name", "ninja", 105],
        ]
    },
    [ 1 ] : {
        headers: ["#", "Guild name", "level", "points"],
        list: [
            [1, "Name", 20, 19000],
            [2, "Name", 20, 19000],
            [3, "Name", 20, 19000],
            [4, "Name", 20, 19000],
            [5, "Name", 20, 19000],
            [6, "Name", 20, 19000],
            [7, "Name", 20, 19000],
            [8, "Name", 20, 19000],
            [9, "Name", 20, 19000],
            [10, "Name", 20, 19000]
        ]
    }
}

export interface TopInfoProps
{
    readonly listCode : TopCode
}