/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-05-20 14:53:52
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-07-19 19:46:50
 */
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import locale from 'antd/lib/locale/zh_CN';
import 'bootstrap/dist/css/bootstrap.css';
import 'moment/locale/zh-cn';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={locale}>
            <Router>
                <App />
            </Router>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
