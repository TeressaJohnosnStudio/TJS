import React from 'react';
import axios from 'axios';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            question: ''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.sendEmail = this.sendEmail.bind(this)

    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            name: e.target.value,
            email: e.target.value,
            subject: e.target.value,
            question: e.target.value
        })
        console.log('FORM SUBMISSION: ', this.state)
    };

    sendEmail(name, email, subject, question) {
        fetch('/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                test: 'BLAHHHH',
                name: 'name',
                email: 'email',
                subject: 'subject',
                question: 'question'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log('here is the response: ', res);
            })
            .catch((err) => {
                console.error('here is the error: ', err);
            })
    }


    render() {
        return <React.Fragment>
            <div className="left">
                <div className="img"></div>
                <div className="media">
                    <img className="icon" />
                    <img className="icon" />
                    <img className="icon" />
                    <img className="icon" />
                </div>
            </div>

            <div className="right">
                <div className="title">
                    <p>contact</p>
                </div>
                <div className="description">It turns out that I enjoy meeting people and I love coffee. So if you like those same things, let's be friends. &#123;253&#125; 709–9509
                </div>

                <div className="contact">
                    <form method="POST" action="contact" onSubmit={this.handleSubmit} >
                        <input id="name" name="name" type="text" placeholder="name"  onChange={this.handleChange}></input>
                        <input id="email" name="email" type="text" placeholder="email"  onChange={this.handleChange}></input>
                        <input id="subject" name="subject"  type="text" placeholder="subject"  onChange={this.handleChange}></input>
                        <input id="question"name="question" type="text" placeholder="your question"  onChange={this.handleChange}></input>
                        <button type="submit" onClick={this.sendEmail}>Send Message</button>
                    </form>
                </div>

            </div>

        </React.Fragment>
    }

}
