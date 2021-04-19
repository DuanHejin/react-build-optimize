import * as React from 'react';

export interface IMomentDemoProps {}

export interface IMomentDemoState {}

export default class MomentDemo extends React.Component<IMomentDemoProps, IMomentDemoState> {
  constructor(props: IMomentDemoProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>MomentDemo</div>;
  }
}
