/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-07-20 11:13:42
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-07-20 11:41:22
 */
import { Typography } from 'antd';
import React, { useContext } from 'react';
const { Title, Paragraph, Text, Link } = Typography;

interface Props {}

const MyContext = React.createContext({ name: 'test' });

const ContextDemo = (props: Props) => {
    return (
        <MyContext.Provider value={{ name: 'custom-test' }}>
            <Text>ContextDemo</Text>
            <ContextChild></ContextChild>
        </MyContext.Provider>
    );
};

interface ChildProps {}

const ContextChild = (props: ChildProps) => {
    const context = useContext(MyContext);
    return (
        <>
            <Text>ContextChild: {JSON.stringify(context, null, 2)}</Text>
            <ContextChild2></ContextChild2>
        </>
    );
};
const ContextChild2 = (props: ChildProps) => {
    return (
        <MyContext.Consumer>
            {(value) => <Text>ContextChild2: {JSON.stringify(value, null, 2)}</Text>}
        </MyContext.Consumer>
    );
};

export default ContextDemo;
