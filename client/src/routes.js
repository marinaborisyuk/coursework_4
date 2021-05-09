import { ADMIN_ROUTE, COMPANY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SERVICE_ROUTE, BASKET_ROUTE } from "./utils/consts";
import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Company from './pages/Company';
import Auth from './pages/Auth';
import ServicePage from './pages/ServicePage';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: COMPANY_ROUTE,
        Component: Company
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: SERVICE_ROUTE + '/:id',
        Component: ServicePage
    }, 
]