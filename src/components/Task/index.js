import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

class index extends Component {
    render() {
        return (
            <div>
                <Task />
            </div>
        );
    }
}

const mapStateToProps = state => ({...state});
export default connect(mapStateToProps)(index);