import React from "react"
import morse from "./alphabet.json"
import {MorseSettings} from "../settings"

export class Morse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: [], 
            tapStart: null, 
            tap: null, 
            tapN: 0,
            tapDurations: [],
            morseCode: [],
            lastDuration: null,
            lastSymbol: null,
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
            const newDuration = (event.timeStamp - this.state.tapStart) / 1000

            const newDurations = [...this.state.tapDurations, newDuration]
            let avg = newDurations.reduce((a, b) => a + b) / newDurations.length
            const newCode = 
                newDuration <= this.state.dotTime ? 
                "*" : 
                newDuration <= this.state.dotTime * 3.5 ?
                "-" : 
                null
            const newMorseCode = [...this.state.morseCode, newCode]
            console.log(avg)
            this.setState({
                tap: null, 
                tapStart: null,
                tapN: this.state.tapN + 1,
                tapDurations: newDurations,
                lastDuration: newDuration,
                lastSymbol: newCode,
                morseCode: newMorseCode,
                averageTap: avg
            })
        });
    }

    changeSettings = (obj) => {
        this.setState({...obj})
    }

    render() {
        let {tapDurations, code, ...rest} = this.state
        return (
        <div>
            <MorseSettings settings={this.state.settings} changeSettings={this.changeSettings}/>
            <h4>
                Selected Dot Time: 
                {this.state.level}: {this.state.dotTime}
            </h4>
            <h4>
                Selected Dash Time: 
                {this.state.level}: {this.state.dotTime * 3}
            </h4>
            <h4>Last Duration: {this.state.lastDuration}</h4>
            <h4>Last Symbol:   {this.state.lastSymbol}</h4>
            <h4>
                Average: 
                {tapDurations.reduce((a, b) => a + b, 0)/tapDurations.length/1000}
            </h4>
            <div>
                your state: {JSON.stringify(rest)}
                <br/>
                <br/>
                Morse: {JSON.stringify(morse)}
            </div>
        </div>)

    }
}



