import '@rmwc/tabs/styles'
import "./ranking.sass"

import React from "react"
import { TabBar, Tab } from "@rmwc/tabs"
import { RankingTable, RankCode } from "../../components"

const Ranking : React.FC = () =>
{
    const [topActiveTab, setTopActiveTab] = React.useState<RankCode>(0);

    return (
        <React.Fragment>
            <section className="mt-ranking--bg">
                <h1>Rank List</h1>
                <div className="mt-ranking-tab">
                    <TabBar
                        activeTabIndex={ topActiveTab }
                        onActivate={ evt => setTopActiveTab( evt.detail.index as RankCode ) }
                    >
                        <Tab>Players</Tab>
                        <Tab>Guilds</Tab>
                    </TabBar>
                </div>            
            </section>
            <section className="mt-ranking-data-table">
                <div className="rank-data-table">
                    <RankingTable rank={ topActiveTab }/>
                </div>
            </section>
        </React.Fragment>
    )
}

export { Ranking }