import * as React from 'react';
import _ from 'lodash';
// import cloneDeep from 'lodash/cloneDeep';

export interface ILodashDemoProps {}

export interface ILodashDemoState {}

export default class LodashDemo extends React.Component<ILodashDemoProps, ILodashDemoState> {
    constructor(props: ILodashDemoProps) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.lodashCloneDeep();
        this.lodashFlatArr();
    }

    lodashCloneDeep = () => {
        const obj1 = { name: 'obj1' };
        const obj2 = _.cloneDeep(obj1);
        // const obj2 = cloneDeep(obj1);
        obj2.name = 'obj2';
        console.log('obj1 :>> ', obj1);
        console.log('obj2 :>> ', obj2);
    };

    lodashFlatArr = () => {
        const arr = [1, [2, 3], [4, [5, 6], 7]];
        const newArr = _.flattenDeep(arr);
        console.log('arr :>> ', arr);
        console.log('newArr :>> ', newArr);
    };

    public render() {
        return <div>LodashDemo</div>;
    }
}
