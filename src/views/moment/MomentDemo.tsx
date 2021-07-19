import * as React from 'react';
// import moment from 'moment';
// import 'moment/locale/ja';

// moment.locale('ja');

export interface IMomentDemoProps {}

export interface IMomentDemoState {}

export default class MomentDemo extends React.Component<IMomentDemoProps, IMomentDemoState> {
    constructor(props: IMomentDemoProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return <div>MomentDemo</div>;

        // const today = moment().format();
        // const week = moment().format('[Today is:] dddd');
        // const timestamp = 1618825958878;
        // const d = moment(timestamp).format();
        // const fromNow = moment(timestamp).fromNow();

        // const usingLocale = moment.locale();
        // const localeMonths = moment.months().join(', ');
        // const weekdays = moment.weekdays().join(', ');
        // return (
        //   <div>
        //     MomentDemo
        //     <div>
        //       Today is: {today}, {week}
        //     </div>
        //     <div>
        //       {d} is {fromNow} from now
        //     </div>
        //     <div>using {usingLocale} locale</div>
        //     <div>localeMonths is {localeMonths}</div>
        //     <div>weekdays is {weekdays}</div>
        //   </div>
        // );
    }
}
