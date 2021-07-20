/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-07-19 17:30:45
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-07-20 11:06:53
 */
import { Button, Layout, Space } from 'antd';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RouteConfig } from '../../routes/config';
import './Main.css';

const { Header, Footer, Sider, Content } = Layout;
interface Props {}

const MainPage = (props: Props) => {
    const history = useHistory();

    const handleClickNav = (path: string) => () => {
        history.push(path);
    };

    return (
        <Layout className='main-layout'>
            {/* <Header>Header</Header>

            <Layout>
                <Sider>Sider</Sider>
                <Content>MainPage</Content>
            </Layout>
            <Footer>Footer</Footer> */}
            <Space direction='vertical'>
                {RouteConfig.filter((config) => config.showAsLink).map(({ path, navName }, index) => {
                    let pathStr = path as any;
                    return (
                        <Link to={pathStr} key={index}>
                            {navName}
                        </Link>
                        // <Button onClick={handleClickNav(pathStr)} key={index}>
                        //     {navName}
                        // </Button>
                    );
                })}
            </Space>
        </Layout>
    );
};

export default MainPage;
