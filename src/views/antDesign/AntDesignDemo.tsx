import * as React from 'react';
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';

export interface IAntDesignDemoProps {}

export interface IAntDesignDemoState {}

export default class AntDesignDemo extends React.Component<IAntDesignDemoProps, IAntDesignDemoState> {
  constructor(props: IAntDesignDemoProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <div>AntDesignDemo</div>
        {/* <DatePicker></DatePicker> */}
        <Button>Button</Button>
      </div>
    );
  }
}
