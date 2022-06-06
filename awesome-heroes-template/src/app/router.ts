import { RouteConfig } from "react-router-config"

import {Home, Register, Download, Ranking} from "./pages"

const routes:RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: Home,
        state: {
            title: 'Home'
        }
    },
    {
        path: '/Register',
        component: Register,
        exact: true,
        state: {
            title: 'Register'
        }
    },
    {
        path: '/Download',
        component: Download,
        exact: true,
        state: {
            title: 'Download'
        }
    },
    {
        path: '/Ranking',
        component: Ranking,
        exact: true,
        state: {
            title: 'Ranking'
        }
    },
    {
        path: '/Board',
        component: Home,
        exact: true,
        state: {
            title: 'Board'
        }
    },
    {
        path: '/Login',
        component: Home,
        exact: true,
        state: {
            title: 'Login',
            class: 'mt-login-button'
        }
    }
]

export{routes}