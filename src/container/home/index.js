import React , { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {mainActions} from '../../actions/index.js';
import styles from './index.scss';
import $ from 'jquery';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
        ['handleChange'].forEach((t) => {this[t] = this[t].bind(this);});
    }
    
    render() {
        let {showChangeLogModal} = this.props;
        return (
            <div className={styles.div}>
               <div>{showChangeLogModal && 'home'}</div>
               <div>{this.state.msg}</div>
               <input onChange={this.handleChange} ref="input"/>
            </div>
        )
    }

    handleChange() {
        let _val = this.refs.input.value;
        this.setState({msg: _val});
        this.fetchTest();
    }

    fetchTest() { 
        // $.post(
        //     "/api",
        //     { method: "POST",body :{author: 'ddd', comment: "hello", email: '', comment_post_ID: 1000}},
        //     (response)=>{
                
        //     }
        // )
        fetch('/zsapi/v2/book/1220562')  //填写路径即可
          .then(function(response) {

          }).then(function(json) {
            //console.log('json==', json)
            //console.log('parsed json', json)
          }).catch(function(ex) {
            //console.log('parsing failed', ex)
          });

        fetch('/api/123/456')  //填写路径即可
          .then(function(response) {
            console.log('response==', response);
          }).then(function(json) {
             console.log('json=======', json)
            //console.log('json==', json)
            //console.log('parsed json', json)
          }).catch(function(ex) {
            //console.log('parsing failed', ex)
          });
        // fetch("http://www.dandyweng.com/post-comment.php", { method: "POST",body :{author: 'ddd', comment: "hello", email: '', comment_post_ID: 1000}})
        // .then(response =>{ 
        //     if(response.ok){ 
        //         return response.json().then(json => ({ json, response })) 
        //     } else {
        //         return Promise.reject(response)
        //     }
        // }).catch(error => {
        //     return Promise.reject(error);
        // });
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
