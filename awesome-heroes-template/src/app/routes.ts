import { RouteConfig } from "react-router-config";

import { Home } from "./pages";

const routes : RouteConfig[] = [
    {
        path : "/",
        exact : true,
        component : Home,
        state : {
            title: "Home",
            visible: false
        }
    },
    {
        path : "/AllHeroes",
        exact : true,
        component : Home,
        state : {
            title: "Heroes Anteriores",
            visible: true
        }
    },
    {
        path : "/About",
        exact : true,
        component : Home,
        state : {
            title: "¿Como funciona?",
            visible: true
        }
    },
    {
        path : "/Session",
        exact : true,
        component : Home,
        state : {
            title: "Iniciar sesion",
            visible: true
        }
    }
];

export {routes}