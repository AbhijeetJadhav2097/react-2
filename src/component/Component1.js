import React from 'react'

class Component1 extends React.Component{

    constructor(props){
        super(props)
    }

 render(){
    const{food} = this.props
    return(
         <p>I love {this.props.food}</p>
    )
 }
}

export default Component1