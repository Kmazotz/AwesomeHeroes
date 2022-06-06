import "@rmwc/data-table/styles"
import "./TopInfo.sass"

import React, {FC} from "react"
import {TopInfoProps, TopCode} from "./TopInfoProps"
import { SimpleDataTable } from "@rmwc/data-table"

const TopInfo : FC<TopInfoProps> = ({ listCode }) =>
{
    return (
        <div className="mt-table-top-info">
            <SimpleDataTable headers={[ TopCode[ listCode ].headers ]} data={ TopCode[ listCode ].list }/>
        </div>        
    )
}

export { TopInfo }