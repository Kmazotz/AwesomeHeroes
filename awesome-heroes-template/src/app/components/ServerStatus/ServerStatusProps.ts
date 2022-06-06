export type StatusCode = 0 | 1 | 2 | 3

export const StatusCode =
{
    [ 0 ] : "Offline",
    [ 1 ] : "Operational",
    [ 2 ] : "In Maintenance",
    [ 3 ] : "Undefined"
}

export interface ServerStatusProps
{
    readonly status : StatusCode
}