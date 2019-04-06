import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/addTask';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            description : '',
            status : 'Active',
            error_title : false,
            error_descn : false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }


    handleChange(event) {
        debugger
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name] : value});
    }
    saveTask(event) {
        event.preventDefault();
        if(!this.state.title && !this.state.description) {
            this.setState({error_title : true, error_descn : true});
        } else if(!this.state.title) {
            this.setState({error_title : true});
        } else if(!this.state.description) {
            this.setState({error_descn : true});
        } else {
            let task = {
                title : this.state.title,
                description : this.state.description,
                status : this.state.status
            }
            this.props.addTask(task);
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label>Title</label>
                    <input name="title" onChange={this.handleChange} placeholder="Enter title here" />
                    { this.state.error_title ? <p>Pleae enter title</p> : '' }
                    <label>Description</label>
                    <textarea name="description" onChange={this.handleChange} placeholder="Enter description here" />
                    { this.state.error_descn ? <p>Pleae enter description</p> : '' }
                    <button type="submit" onClick={this.saveTask}>Save</button>
                </form>
                <pre>{JSON.stringify(this.props.tasks)}</pre>
            </div>
        );
    }
}

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({
  addTask: () => dispatch(addTask())
})
export default connect(mapStateToProps, mapDispatchToProps)(Task);