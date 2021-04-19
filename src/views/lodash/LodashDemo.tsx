import * as React from 'react';
import _ from 'lodash';

export interface ILodashDemoProps {}

export interface ILodashDemoState {}

export default class LodashDemo extends React.Component<ILodashDemoProps, ILodashDemoState> {
  constructor(props: ILodashDemoProps) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // this.lodashCloneDeep();
  }

  // lodashCloneDeep = () => {
  //   const obj1 = { name: 'obj1' };
  //   const obj2 = _.cloneDeep(obj1);
  //   obj2.name = 'obj2';
  //   console.log('obj1 :>> ', obj1);
  //   console.log('obj2 :>> ', obj2);
  // };

  public render() {
    return <div>LodashDemo</div>;
  }
}
