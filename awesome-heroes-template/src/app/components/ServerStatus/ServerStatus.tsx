import "./ServerStatus.sass"

import { default as classNames } from "classnames"
import React, { FC } from "react"

import { ServerStatusProps, StatusCode } from "./ServerStatusProps"

const ServerStatus : FC<ServerStatusProps> = ({ status }) =>
{
    const statusColor =
    {
        "mt-status-offline" : status === 0,
        "mt-status-operational" : status === 1,
        "mt-status-maintance" : status === 2,
        "mt-status-undefined" : status === 3,
    }

    return (
        <p className="mt-server-status-content">
            Status : <span className={ classNames ("mt-status", statusColor) }>{ StatusCode[ status ] }</span>
        </p>
    )
}

export { ServerStatus }