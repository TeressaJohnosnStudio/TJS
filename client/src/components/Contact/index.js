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
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubject = this.handleSubject.bind(this);
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleAll = this.handleAll.bind(this);
    }

    handleName(e) {
        e.preventDefault();
        let setName = e.target.value;
        this.setState({ name: setName });
        console.log('NAME: ', setName);
        
    }
    handleEmail(e) {
        e.preventDefault();
        let setEmail = e.target.value;
        this.setState({ email: setEmail });
        console.log('EMAIL: ', setEmail);
    }
    handleSubject(e) {
        e.preventDefault();
        let setSubject = e.target.value;
        this.setState({ subject: setSubject });
        console.log('SUBJECT: ', setSubject);
    }
    handleQuestion(e) {
        e.preventDefault();
        let setQuestion = e.target.value;
        this.setState({ question: setQuestion });
        console.log('Question: ', setQuestion);
    }

    handleAll(e) {
        e.preventDefault();
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
                    <form onSubmit={this.handleAll}>
                        <input type="text" placeholder="name" onChange={this.handleName}></input>
                        <input type="text" placeholder="email" onChange={this.handleEmail}></input>
                        <input type="text" placeholder="subject" onChange={this.handleSubject}></input>
                        <input type="text" placeholder="your question" onChange={this.handleQuestion}></input>
                        <button>Send Message</button>
                    </form>
                </div>

            </div>

        </React.Fragment>
    }

}
