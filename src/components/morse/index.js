import React from "react"
import morse from "./alphabet.json"
// let morse = require('./alphabet.json');
export class Morse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: [], 
            tapStart: null, 
            tap: null, 
            tapN: 0,
            tapDurations: [],
            averageTap: 0
        };
      }

    componentDidMount = (props) => {
        document.body.addEventListener('keydown', (event) => {
            if (this.state.tap !== event.key) {
                this.setState({
                    tap: event.key, 
                    code: [...this.state.code, event.key], 
                    tapStart: event.timeStamp
                })
            }
        });

        document.body.addEventListener('keyup', (event) => {
            const newDurations = [...this.state.tapDurations, event.timeStamp - this.state.tapStart]
            let avg = newDurations.reduce((a, b) => a + b) / newDurations.length
            console.log(avg)
            this.setState({
                tap: null, 
                tapStart: null,
                tapN: this.state.tapN + 1,
                tapDurations: newDurations,
                averageTap: avg
            })
        });

    }

    render() {
        let {tapDurations, code, ...rest} = this.state
        return (
        <div>
            This is the class Morse!!
            <div>
                your state: {JSON.stringify(rest)}
                <br/>
                lists: {JSON.stringify(tapDurations)}
                <br/>
                lists: {JSON.stringify(code)}
                <br/>
                Morse: {JSON.stringify(morse)}
            </div>
        </div>)

    }
}



