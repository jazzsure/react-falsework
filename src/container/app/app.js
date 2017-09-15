import React , { Component } from 'react'
import commonCss from "./common.css";
class App extends Component{
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
module.exports = App