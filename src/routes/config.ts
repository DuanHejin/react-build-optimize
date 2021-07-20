/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-07-19 17:33:57
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-07-19 19:38:14
 */
import { RouteProps } from 'react-router-dom';
import { AntDesignDemo, Home, LodashDemo, MomentDemo } from '../views';
import HooksDemo1 from '../views/hooksDemo/HooksDemo1';
import Main from '../views/main/Main';

export interface IRouteConfig extends RouteProps {
    navName: string;
    showAsLink: boolean;
}
export const RouteConfig: IRouteConfig[] = [
    {
        path: '/',
        component: Main,
        navName: 'Main',
        exact: true,
        showAsLink: false,
    },
    {
        path: '/Home',
        component: Home,
        navName: 'Home',
        showAsLink: true,
    },
    {
        path: '/LodashDemo',
        component: LodashDemo,
        navName: 'LodashDemo',
        showAsLink: true,
    },
    {
        path: '/MomentDemo',
        component: MomentDemo,
        navName: 'MomentDemo',
        showAsLink: true,
    },
    {
        path: '/AntDesignDemo',
        component: AntDesignDemo,
        navName: 'AntDesignDemo',
        showAsLink: true,
    },
    {
        path: '/HooksDemo1',
        component: HooksDemo1,
        navName: 'HooksDemo1',
        showAsLink: true,
    },
    {
        path: '/*',
        component: Main,
        navName: 'Main',
        showAsLink: false,
    },
];
