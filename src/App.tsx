/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-05-20 14:53:52
 * @LastEditors: duanhejin
 */
import { Button, Layout } from 'antd';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';

function App() {
    const history = useHistory();
    const { pathname } = useLocation();
    const goBack = () => {
        history.goBack();
    };

    return (
        <Layout className='App'>
            <Routes></Routes>
            {pathname !== '/' && (
                <Button className='btn-back-layout' type='primary' onClick={goBack}>
                    返回
                </Button>
            )}
        </Layout>
    );
}

export default withRouter(App);
