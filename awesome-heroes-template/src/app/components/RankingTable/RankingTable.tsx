import "@rmwc/data-table/styles"
import { makeStyles } from '@material-ui/core/styles'
import "@rmwc/grid/styles"
import "@rmwc/textfield/styles"
import "./RankingTable.sass"

import React, { FC } from "react"
import { RankingProps, RankCode } from "./RankingTableProps"
import { SimpleDataTable } from "@rmwc/data-table"
import { Grid, GridRow, GridCell } from "@rmwc/grid"
import { TextField } from "@rmwc/textfield"

import { Icon } from "@mdi/react"
import { mdiMagnify } from "@mdi/js"

interface column{
    id: 'id' | 'name' | 'lvl' | 'points' | 'class' | 'nickname';
    minWidth?: number;
    label?: string,
    align?: 'right';
    format?: ( value : number ) => string
}

const playerColumns : column[] = [
    { id: 'id', label: '#', minWidth: 170 },
    { id: 'nickname', label: 'NickName', minWidth: 170 },
    { id: 'lvl', label: 'Level', minWidth: 170},
    { id: 'class', label: 'Class', minWidth: 170 },
]

const guildColumns : column[] = [
    { id: 'id', label: '#', minWidth: 170 },
    { id: 'name', label: 'GUILD Name', minWidth: 170 },
    { id: 'lvl', label: 'Level', minWidth: 170},
    { id: 'points', label: 'Points', minWidth: 170 },
]

interface playerData {
    readonly code: number;
    readonly name: string;
    readonly classType: string;
    readonly lvl: number;
}

interface guildData {
    readonly code: number;
    readonly name: string;
    readonly lvl: number;
    readonly points: number;
}

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
});

function createPlayerData(code: number, name: string, classType: string, lvl: number ): playerData{ 
    return { code, name, classType, lvl }
}

function createGuildrData(code: number, name: string, lvl: number, points: number): guildData { 
    return { code, name, lvl, points } 
}


const RankingTable : FC<RankingProps> = ({ rank }) =>
{

    const rows = RankCode[ rank ].list.map( ( data, x ) => {

            let first = data[ 1 ];
            let second = data[ 2 ];
            let third = data[ 3 ];

            //console.log(createPlayerData( x, first, second, third ));

            return "";/*rank === 0 ? createPlayerData( x, first, second, third ) : createGuildrData( x, first, second, third );*/
        } 
    );

    return (
        <div className="mt-rank-table">
            <Grid>
                <GridRow>
                    <GridCell desktop={12} tablet={12} phone={12}>
                        <TextField trailingIcon={ <Icon path={ mdiMagnify } title="Search" size={1}/> } label="Search" className="mt-rank-input--fullwidth"/>
                    </GridCell>
                    <GridCell desktop={12} tablet={12} phone={12}>
                        <SimpleDataTable headers={[ RankCode[ rank ].headers ]} data={ RankCode[ rank ].list }/>
                    </GridCell>
                </GridRow>
            </Grid>
            
        </div>        
    )
}

export { RankingTable }