import React, { Component } from "react";


class BulbOnOff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bulbStatus: false
        }
        this.turnOnOff = this.turnOnOff.bind(this)
    }

turnOnOff(){
    this.setState((prevState)=> ({
        bulbStatus : ! prevState.bulbStatus
    }))
}

    render() {
        let style = {
            imgStyle: {
                height: '400px',
                margin: '20px'
            },
            buttonStyle: {
                padding: '4px',
                borderRadius: '10px',
                fontSize: "1.2em"
            }
        }

        return (
            <>
                <img src={this.state.bulbStatus ? "https://www.w3schools.com/js/pic_bulbon.gif" : "https://www.w3schools.com/js/pic_bulboff.gif"} alt='bulb' style={style.imgStyle} />
                <br />
                <button style={style.buttonStyle} onClick={this.turnOnOff}>On/Off</button>
            </>
        )
    }
}


export default BulbOnOff