import * as React from 'react';

export interface IHomeProps {}

export interface IHomeState {}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    let data = this.getData('a', 'b', 'c');
    console.log('data :>> ', data);
  }

  getData = (a: string, b: string, c: string) => {
    return { a, b, c, type: 'data' };
  };

  public render() {
    return (
      <div>
        process.env.NODE_ENV: {process.env.NODE_ENV}
        <br />
        Home
      </div>
    );
  }
}
