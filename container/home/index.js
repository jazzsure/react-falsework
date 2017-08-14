import React , { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {mainActions} from '../../actions/index.js';
import styles from './index.scss'

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
    
    componentDidMount() {
        this.props.changeShowChangeLogModalState(true);
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
