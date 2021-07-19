/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-07-16 10:48:36
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-07-19 17:58:19
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteConfig } from './config';

interface Props {}

export default (_: Props) => {
    return (
        <Switch>
            {RouteConfig.map(({ path, component, exact }, index) => (
                <Route path={path} exact={exact} component={component} key={index}></Route>
            ))}
        </Switch>
    );
};
