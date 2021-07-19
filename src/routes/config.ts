/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-07-19 17:33:57
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-07-19 18:48:55
 */
import Main from '../views/main/Main';
import { AntDesignDemo, Home, LodashDemo, MomentDemo } from '../views';
import HooksDemo1 from '../views/hooksDemo/HooksDemo1';
import { RouteProps } from 'react-router-dom';

export interface IRouteConfig extends RouteProps {
    navName: string;
}
export const RouteConfig: IRouteConfig[] = [
    {
        path: '/',
        component: Main,
        navName: 'Main',
        exact: true,
    },
    {
        path: '/Home',
        component: Home,
        navName: 'Home',
    },
    {
        path: '/LodashDemo',
        component: LodashDemo,
        navName: 'LodashDemo',
    },
    {
        path: '/MomentDemo',
        component: MomentDemo,
        navName: 'MomentDemo',
    },
    {
        path: '/AntDesignDemo',
        component: AntDesignDemo,
        navName: 'AntDesignDemo',
    },
    {
        path: '/HooksDemo1',
        component: HooksDemo1,
        navName: 'HooksDemo1',
    },
    {
        path: '/*',
        component: Main,
        navName: 'Main',
    },
];
