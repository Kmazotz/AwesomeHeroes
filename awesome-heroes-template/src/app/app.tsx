import React from 'react';

import { renderRoutes } from "react-router-config"
import { BrowserRouter, Link } from "react-router-dom"
import { default as classNames } from "classnames"

import Icon from "@mdi/react"
import { IconButton } from "@rmwc/icon-button"
import { mdiCopyright, mdiMenu } from "@mdi/js"

import { routes } from "./router"

const App : React.FC = () => 
{

  const [serverName, setSertverName] = React.useState('Lorem Ipsum');
  const [openMenu, setOpenMenu] = React.useState('');

  return (
    <React.Fragment>
      <BrowserRouter>
        <nav className="mt-navigation">
          <IconButton icon={<Icon path={mdiMenu} title="Menú" />} onClick={() => setOpenMenu( openMenu === '' ? 'active' : '' )}/>
          <div className="mt-logo"></div>
          <ul className={classNames("mt-nav-options", openMenu)}>
            {[ routes.map(({path, state}) => (<li><Link to={path as string} className={!state.class? '' : state.class} onClick={() => setOpenMenu( openMenu === 'active' ? '' : 'active' ) } >{state.title}</Link></li>)) ]}
          </ul>
          <Link to="/Login" className="mt-mobile-login-btn">Login</Link>
        </nav>
        {renderRoutes(routes)}
        <footer>
          <p>copyright <Icon path={mdiCopyright} title="copy"/> { (new Date()).getFullYear() } <span>{ serverName }</span> .all rights reserved. 
            <ul>
              <li><a href="!#" target="_blank">ElitePvP</a></li>
              <li><a href="!#" target="_blank">M2 PServer</a></li>
            </ul>
          </p>
        </footer>
      </BrowserRouter>
    </React.Fragment>
  );
}

export{ App }