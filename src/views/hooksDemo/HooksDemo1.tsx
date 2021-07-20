/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-05-20 14:57:24
 * @LastEditors: duanhejin
 */

import * as React from 'react';
import { useEffect, useState } from 'react';

export interface IHooksDemo1Props {}

const HooksDemo1 = (props: IHooksDemo1Props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('trigger userEffect');
    }, []);

    const [selectedKeys, setSelectedKeys] = useState([] as any[]);

    const handleSelect = (targetKey: any) => {
        const index = selectedKeys.findIndex((key) => key === targetKey);
        if (index > -1) {
            selectedKeys.splice(index, 1);
        } else {
            selectedKeys.push(targetKey);
        }
        setSelectedKeys([...selectedKeys]);
    };

    console.log('count :>> ', count);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button className='btn btn-default' onClick={() => setCount(count + 1)}>
                点我加1
            </button>

            <h1>{selectedKeys.join(', ')}</h1>
            <button className='btn btn-default' onClick={() => handleSelect(1)}>
                toggle1
            </button>
        </div>
    );
};

export default HooksDemo1;
