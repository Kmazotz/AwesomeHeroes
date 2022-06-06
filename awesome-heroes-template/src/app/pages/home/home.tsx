import '@rmwc/tabs/styles'
import "./home.sass"

import React from "react"
import CountUp from "react-countup"
import { Link } from "react-router-dom"

import { ServerStatus, StatusCode, BestPlayerInfo, TopInfo, TopCode } from "../../components"
import { TabBar, Tab } from "@rmwc/tabs"

const Home : React.FC = () =>
{
    const [serverStatus, setServerStatus] = React.useState<StatusCode>(1);
    const [serverName, setSertverName] = React.useState('Lorem Ipsum');
    const [activeTab, setActiveTab] = React.useState(0);
    const [topActiveTab, setTopActiveTab] = React.useState<TopCode>(0);

    React.useEffect (() =>
    {
        const timer = setInterval (() =>
            setServerStatus (serverStatus === 3 ? 0 : serverStatus + 1 as StatusCode), 5000)

        return () => clearTimeout (timer)
    })

    return(
        <React.Fragment>
            <header className="m2-app-header">
                <article>
                    <h1>Server Statistics</h1>
                    <div className="mt-statistics-values">
                        <div>
                            <p className="mt-statistic-number"><CountUp end={673}/></p>
                            <p className="mt-statistics-title">online players</p>
                        </div>
                        <div>
                            <p className="mt-statistic-number"><CountUp end={2173}/></p>
                            <p className="mt-statistics-title">online players 24h</p>
                        </div>
                        <div>
                            <p className="mt-statistic-number"><CountUp end={82481}/></p>
                            <p className="mt-statistics-title">characters</p>
                        </div>
                        <div>
                            <p className="mt-statistic-number"><CountUp end={2694}/></p>
                            <p className="mt-statistics-title">Guilds</p>
                        </div>
                    </div>
                </article>

                <div className="mt-server-status">                    
                    <ServerStatus status={serverStatus}/>
                </div>
            </header>
            <section className="mt-app-info">
                <article className="mt-about">
                    <h1>{serverName}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero eveniet consequatur beatae voluptatum eius porro nisi ratione assumenda illo cumque ipsam harum ullam voluptas, alias minus praesentium exercitationem excepturi.</p>
                </article>
                <div className="mt-tab-info">
                    <TabBar
                        activeTabIndex={ activeTab }
                        onActivate={ evt => setActiveTab(evt.detail.index) }
                    >
                        <Tab>News</Tab>
                        <Tab>Updates</Tab>
                        <Tab>Events</Tab>
                    </TabBar>
                </div>
            </section>

            <section className="mt-best-player-info">
                <article>
                    <h1>Best player by class</h1>
                    <div className="mt-best-player-info">
                        <BestPlayerInfo code={0}></BestPlayerInfo>
                        <BestPlayerInfo code={1}></BestPlayerInfo>
                        <BestPlayerInfo code={2}></BestPlayerInfo>
                        <BestPlayerInfo code={3}></BestPlayerInfo>
                    </div>
                </article>
            </section>

            <section className="mt-best-global-ranking">
                <div className="mt-tab-info">
                    <h1>Top 10</h1>
                    <TabBar
                        activeTabIndex={ topActiveTab }
                        onActivate={ evt => setTopActiveTab(evt.detail.index as TopCode) }
                    >
                        <Tab>Players</Tab>
                        <Tab>Guilds</Tab>
                    </TabBar>

                    <div className="mt-best-golbal-ranking--table">
                        <TopInfo listCode={ topActiveTab }></TopInfo>
                        <Link to="/Ranking">See all</Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export{Home}