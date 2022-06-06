import "./app.sass";

import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import { routes } from "./routes";
import classNames from "classnames";

const App : React.FC = () =>{

    const PageLogo = require("./img/HeroesLogo.svg").default;
    const [openMenu, setOpenMenu] = React.useState(false);

    return(
        <React.Fragment>
            <BrowserRouter>
                <nav className="heroes-menu">

                    <button className={classNames('btn-open-menu', openMenu? 'active' : '')}>
                        <FontAwesomeIcon icon={!openMenu? faEllipsisVertical : faTimes} onClick={() => setOpenMenu(openMenu? false : true)}/>
                    </button>

                    <Link to="/">
                        <div className="heroes-logo">
                            <img src={PageLogo} alt="logo" height="60" />
                        </div>
                    </Link>
                    <div className={classNames('navigation', openMenu? 'active' : '')}>
                        <ul>
                            {routes.map(({path, state}) => state.visible ? (

                                <li><Link to={path as string}>{state.title}</Link></li>
                            ) : '')}
                        </ul>

                        <div className="heroes-search">
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </div>
                </nav>
                {renderRoutes(routes)}
            </BrowserRouter>
        </React.Fragment>
    );
};

export{App};