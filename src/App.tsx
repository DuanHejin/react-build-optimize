import React from 'react';
import './App.css';
import LodashDemo from './views/lodash/LodashDemo';
import MomentDemo from './views/moment/MomentDemo';
import AntDesignDemo from './views/antDesign/AntDesignDemo';
// import { AntDesignDemo, Home, LodashDemo, MomentDemo } from "./views";

function App() {
  return (
    <div className='App'>
      {/* <Home></Home> */}
      <LodashDemo></LodashDemo>
      <br />
      <MomentDemo></MomentDemo>
      <br />
      <AntDesignDemo></AntDesignDemo>
    </div>
  );
}

export default App;
