import React, { Component } from "react";

class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.increment5 = this.increment5.bind(this)
        this.decrement5 = this.decrement5.bind(this)
    }

    // increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }




    // increment() {
    //     this.setState((prevState) => ({
    //         count: prevState.count + 1
    //     }))
    // }
//upper one is another way of writing callback

    increment() {
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            }   
        })
    }


    increment5(){ 
            this.increment()
            this.increment()
            this.increment()
            this.increment()
            this.increment()
    }


    decrement5(){
        this.decrement()
        this.decrement()
        this.decrement()
        this.decrement()
        this.decrement()
    }

    decrement() {
        this.setState((prevState)=>({
            count: prevState.count - 1
        }))
    }
    // decrement() {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    // }

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
                <button style={style.buttonStyle} onClick={this.increment5}>Increment5</button>
                <button style={style.buttonStyle} onClick={this.decrement5}>Decrement5</button>
                <button style={style.buttonStyle} onClick={this.decrement}>Decrement</button>
            </>
        )
    }
}
export default Count