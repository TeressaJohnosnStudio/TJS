import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            question: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmt = this.onSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.value,
            email: e.target.value,
            subject: e.target.value,
            question: e.target.value,
        })
        console.log('Submission Content:', this.state)
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
                    <form name="contact" action="/send-email" method="POST" onSubmit={this.onSubmit}>
                        <input name="name" type="text" placeholder="name" onChange={this.handleChange}></input>
                        <input name="email" type="text" placeholder="email" onChange={this.handleChange}></input>
                        <input name="subject" type="text" placeholder="subject" onChange={this.handleChange}></input>
                        <input name="question" type="text" placeholder="your question" onChange={this.handleChange}></input>
                        <button>Send Message</button>
                    </form>
                </div>

            </div>

        </React.Fragment>
    }

}
