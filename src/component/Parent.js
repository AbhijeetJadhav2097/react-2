import React, {Component} from 'react'
import Component1 from './Component1'
// import Component2 from './Component2'

class Parent extends Component{
    render(){
        return(
            <>
           <h2>Abhijeet</h2>
           <Component1 food='Pavbhaji' bgColor='red'/>
           <Component1 food='Shevbhaji' bgColor='skyblue' />
           <Component1 food='Chicken' bgColor='green'/>
           <Component1 food='Fish' bgColor='yellow'/>
           <Component1 food='Dolphin' bgColor='skyblue'/> 
           </>
        )
    }
}

export default Parent