import React, { Component } from "react";

class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        let style = {
            pStyle: {
                margin: 0, fontSize: '5em'
            },
            buttonStyle: {
                padding: '4px',
                borderRadius: '10px',
                fontSize: "1.2em"
            }
        }

        const { count } = this.state
        return (
            <>
                <p style={style.pStyle}>{count}</p>
                <button style={style.buttonStyle} onClick={this.increment}>Increment</button>
                <button style={style.buttonStyle} onClick={this.decrement}>Decrement</button>
            </>
        )
    }
}
export default Count