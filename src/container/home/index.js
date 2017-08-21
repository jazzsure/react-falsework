import React , { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {mainActions} from '../../actions/index.js';
import styles from './index.scss';

class Home extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        let {showChangeLogModal} = this.props;
        return (
            <div className={styles.div}>
               {showChangeLogModal && 'home'}
            </div>
        )
    }

    fetchTest() { 
        fetch("http://localhost:3000/123/456")
        .then(response =>{ 
            if(response.ok){ 
                return response.json().then(json => ({ json, response })) 
            } else {
                return Promise.reject(response)
            }
        }).catch(error => {
            return Promise.reject(error);
        });
    }

    componentDidMount() {
        this.props.changeShowChangeLogModalState(true);
        this.fetchTest();
        //this.props.redirect('/main/sub');
    }

} 

function mapStateToProps(state) {
    return {
        showChangeLogModal: state.main.showChangeLogModal
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, mainActions), dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);
