import React , { Component } from 'react'
import styles from './app.scss'

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