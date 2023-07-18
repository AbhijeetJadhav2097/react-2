import React from 'react'

class Component1 extends React.Component{

    constructor(props){
        super(props)
    }

 render(){
    const{food, bgColor} = this.props
    // let pStyle = {backgroundColor : 'skyblue'}
    return(
         <p style = {{backgroundColor:bgColor}}>I love {food}</p>
    )       
 }
}

export default Component1