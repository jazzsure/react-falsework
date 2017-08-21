import React , { Component } from 'react'

class Greeter extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div>
               {this.props.children}
            </div>
        )
    }
} 

export default Greeter;
