import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// import * as actionTypes from '../../'

class Logout extends Component {
    render() {
        return {

        }
    }
}

const mapStateToProps = state => {
    return {
        logout: state.auth.token !== null
    }
}

const mapDispatchtoProps= dispatch=>{
//    isLogout: act
}

export default connect(mapStateToProps)(Logout);