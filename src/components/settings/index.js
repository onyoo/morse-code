import React from "react"

export class MorseSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            levels: [
                {dotTime: 70/1000, label: "Easy"},
                {dotTime: 60/1000,label:"Medium"},
                {dotTime: 50/1000, label: "Normal"}
            ]
        };
      }

    componentDidMount = (props) => {
        this.props.changeSettings(this.state.levels[0])
    }

    render() {
        return (
        <div>
            {Object.values(this.state.levels).map(level=>{
                return <button 
                        onClick={() => {this.props.changeSettings(level)}}>
                        {level.label}
                    </button>
            })}
        </div>)
    }
}



