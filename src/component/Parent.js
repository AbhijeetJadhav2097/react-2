import React, {Component} from 'react'
import Component1 from './Component1'
// import Component2 from './Component2'

class Parent extends Component{
    render(){
        return(
            <>
           <h2>Abhijeet</h2>
           <Component1 food='Pavbhaji' />
           <Component1 food='Shevbhaji' />
           <Component1 food='Chicken' />
           <Component1 food='Fish' />
           <Component1 food='Dolphin' />
           <Component1 food='Dolphin' />
           <Component1 food='Dolphin' />
           <Component1 food='Dolphin' />
           </>
        )
    }
}

export default Parent