require('dotenv').config();

import React from 'react';
// import axios from 'axios';

export default class AdminForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
      }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }
 
 
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            username: event.target.value,
            password: event.target.value,
        })
        console.log('FORM SUBMISSION: ', this.state);
        if(username === process.env.USERNAME) {
            alert('logged in');
        }
        let username = this.state.username;
        let password = this.state.password;

        this.login(username, password);
    };
 
    login = (username, password) => {
        axios.post('/admin/login', {username, password})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="username" onChange={this.handleChange} />
                <input type="text" name="password" placeholder="password" onChange={this.handleChange} />

                <button type="submit">Login</button>

            </form>
            
        )
    }
}