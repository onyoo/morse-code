import React from "react"
import morse from "./alphabet.json"
import {MorseSettings} from "../settings"

export class Morse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: [], 
            tapStart: null, 
            tapLastEnd: null,
            key: null, 
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
            if (event.key === "Escape") {
                this.setState({
                    reading: !this.state.reading,
                })
            } else if (this.state.key !== event.key && this.state.reading) {
                let elapsedTime = Math.floor((event.timeStamp - this.state.tapLastEnd) / 10 * this.state.dotTime)
                let newCode = new Array(Math.floor(elapsedTime)).fill(" ")
                // console.log(elapsedTime, newCode)
                const newMorseCode = [...this.state.morseCode, ...newCode]
                this.setState({
                    key: event.key, 
                    code: [...this.state.code, event.key], 
                    morseCode: newMorseCode,
                    tapLastEnd: null,
                    tapStart: event.timeStamp
                })
            }
        });

        document.body.addEventListener('keyup', (event) => {
            if (this.state.reading) {
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
                this.setState({
                    key: null, 
                    tapStart: null,
                    tapLastEnd: event.timeStamp,
                    tapDurations: newDurations,
                    lastDuration: newDuration,
                    lastSymbol: newCode,
                    morseCode: newMorseCode,
                    averageTap: avg
                })
            }
        });
    }

    changeSettings = (obj) => {
        this.setState({...obj})
    }

    render() {

        let {tapDurations, code, morseCode, ...rest} = this.state

        let translation = morseCode.join("").split(" ").filter(str => str.length > 0).map(str => {
            return morse.morse[str]
        })
        console.log(translation)
        return (
        <div>
            <MorseSettings settings={this.state.settings} changeSettings={this.changeSettings}/>
            <div id="morse-display">
                {translation}
            </div>
                {morseCode}
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



