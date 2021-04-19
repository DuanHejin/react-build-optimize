import * as React from 'react';
// import { Button, DatePicker } from 'antd';
// import 'antd/dist/antd.min.css';

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
        {/* <div>
          <DatePicker></DatePicker>
        </div>
        <div>
          <Button>Button</Button>

          <Button type='primary' shape='circle'>
            A
          </Button>
        </div> */}
      </div>
    );
  }
}
