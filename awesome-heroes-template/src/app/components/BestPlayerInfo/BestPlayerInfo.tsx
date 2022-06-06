import "./BestPlayerInfo.sass"

import { default as classNames } from "classnames"
import React, {FC} from "react"

import { BestPlayerInfoProps, ClassCode } from "./BestPlayerInfoProps"

const BestPlayerInfo : FC<BestPlayerInfoProps> = ({ code }) =>
{
    const PlayerClass =
    {
        "warrior" : code === 0,
        "ninja" : code === 1,
        "sura" : code === 2,
        "shaman" : code === 3
    }

    return (
        <div className={ classNames ("mt-best-player", PlayerClass) }>
            <article>
                <h3>Best { ClassCode[ code ].type }</h3>
                <p><span className="mt-info-player-name">{ ClassCode[ code ].name }</span></p>
                <p>Lvl: <span className="mt-info-player-lvl">{ ClassCode[ code ].level }</span></p>
                <p>Mage: <span className="mt-info-player-mage">{ ClassCode[ code ].mage }</span></p>
            </article>
        </div>
    )
}

export { BestPlayerInfo }