import React from "react"
import morse from "./alphabet.json"
import {MorseSettings} from "../settings"

export class Morse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dotTime: 0.2,
            tapStart: null, 
            tapLastEnd: null,
            key: null, 
            tapN: 0,
            tapDurations: [],
            morseCode: [],
            lastDuration: null,
            lastSymbol: null,
            averageTap: 0,
            reading: false
        };
      }

    componentDidMount = (props) => {
        window.onblur = (event) => {
            this.stopListening()
        }
        document.body.addEventListener('keydown', (event) => {
            if (event.key === "Escape") {
                this.onOff()
            } else if (this.state.key !== event.key && this.state.reading) {
                this.recordKeyDown(event)
            }
        });
        document.body.addEventListener('keyup', (event) => {
            if (event.key !== "Escape") {
                this.recordKeyUp(event)
            }
        });
    }

    onOff = () => {
        let newMorseCode = [...this.state.morseCode]
        let command = !this.state.reading ? " Start" : " Stop"
        if (this.state.reading) newMorseCode.push(command)
        this.setState({reading: !this.state.reading, morseCode: newMorseCode})
    }

    stopListening = () => {
        let newMorseCode = [...this.state.morseCode]
        if (this.state.reading) newMorseCode.push(" Stop")
        this.setState({
            reading: false,
            tapStart: null, 
            tapLastEnd: null,
            morseCode: newMorseCode
        })
    }

    recordKeyDown = (event) => {
        let newCode = []
        if (this.state.tapLastEnd) {
            let noKeyTime = Math.round((event.timeStamp - this.state.tapLastEnd) / 1000 * this.state.dotTime)
            newCode = new Array(Math.floor(noKeyTime)).fill(" ")
        }
        let newMorseCode = [...this.state.morseCode, ...newCode]
        this.setState({
            key: event.key, 
            morseCode: newMorseCode,
            tapLastEnd: null,
            tapStart: event.timeStamp
        })
    }

    recordKeyUp = (event) => {
        if (this.state.reading) {
            const newDuration = (event.timeStamp - this.state.tapStart) / 1000
            const tapDurations = [...this.state.tapDurations, newDuration]
            let avg = tapDurations.reduce((a, b) => a + b) / tapDurations.length
            const newCode = 
                newDuration <= this.state.dotTime ? 
                "*" : 
                newDuration <= this.state.dotTime * 3.5 ?
                "-" : 
                " *Error!*"
            const newMorseCode = [...this.state.morseCode, newCode]
            this.setState({
                key: null, 
                tapStart: null,
                tapLastEnd: event.timeStamp,
                tapDurations: tapDurations,
                lastDuration: newDuration,
                lastSymbol: newCode,
                morseCode: newMorseCode,
                averageTap: avg
            })
        }
    }

    changeSettings = (obj) => {
        this.setState({...obj})
    }

    reset = (event) => {
        this.setState({
            tapStart: null, 
            tapLastEnd: null,
            key: null, 
            tapN: 0,
            tapDurations: [],
            morseCode: [],
            lastDuration: null,
            lastSymbol: null,
            averageTap: 0,
            reading: false
        })
    }

    render() {
        let {tapDurations, morseCode, ...rest} = this.state

        let translation = morseCode.join("").split(" ").filter(str => str.length > 0).map(str => {
            return morse.morse[str]
        })
        console.log(morseCode)
        return (
        <div>
            <MorseSettings dotTime={this.state.dotTime} changeSettings={this.changeSettings}/>
            <div id="morse-display">{translation}</div>
                {morseCode}
            <button onClick={this.reset}>Clear</button>
            <h4>Selected Dot Time: {this.state.dotTime}</h4>
            <h4>Selected Dash Time: {this.state.dotTime * 3}</h4>
            <h4>Last Duration: {this.state.lastDuration}</h4>
            <h4>Last Symbol:   {this.state.lastSymbol}</h4>
            <h4>
                Average: 
                {tapDurations.reduce((a, b) => a + b, 0)/tapDurations.length/1000}
            </h4>
            <div>
                your state: {JSON.stringify(rest)}
                <br/>
                <div>
                    Remember Remember the 5th of November:
                    <div>
                        {Object.keys(morse.remember).map(k => {
                            return <div>{k}: {morse.remember[k]}</div>
                        })}
                    </div>
                </div>
                <br/>
                Morse: {JSON.stringify(morse)}
            </div>
        </div>)

    }
}



