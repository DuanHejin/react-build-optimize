/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-05-20 14:53:52
 * @LastEditors: duanhejin
 */
import React from 'react';
import './App.css';
// import LodashDemo from './views/lodash/LodashDemo';
// import MomentDemo from './views/moment/MomentDemo';
// import AntDesignDemo from './views/antDesign/AntDesignDemo';
import HooksDemo1 from './views/hooksDemo/HooksDemo1';
// import { AntDesignDemo, Home, LodashDemo, MomentDemo } from "./views";

function App() {
    return (
        <div className='App'>
            {/* <Home></Home> */}
            {/* <LodashDemo></LodashDemo>
      <br />
      <MomentDemo></MomentDemo>
      <br />
      <AntDesignDemo></AntDesignDemo> */}
            <HooksDemo1></HooksDemo1>
        </div>
    );
}

export default App;
