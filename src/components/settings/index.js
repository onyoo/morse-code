import React from "react"

export class MorseSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
      }

    render() {
        return (
        <div>
            <input 
                type="range" 
                min="0.05" 
                max="0.5" 
                value={this.props.dotTime} 
                class="slider" 
                id="myRange" 
                step="0.01"
                onChange={(e) => {this.props.changeSettings({dotTime: e.target.value})}}
            ></input>
        </div>)
    }
}



