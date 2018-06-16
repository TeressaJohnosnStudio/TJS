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

    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         name: e.target.value,
    //         email: e.target.value,
    //         subject: e.target.value,
    //         question: e.target.value,
    //     })
    //     console.log('Submission Content:', this.state)
    // }

 
    handleSubmit(e) {
        e.preventDefault();
        const name = e.target.value;
        const email = e.target.value;
        const subject = e.target.value;
        const message = e.target.value;
        this.setState({
            name: e.target.value,
            email: e.target.value,
            subject: e.target.value,
            question: e.target.value,
        })
        console.log('Submission Content:', this.state);

        axios({
            method: "POST", 
            url:"http://localhost:3000/", 
            data: {
                name: name,   
                email: email,  
                subject: subject,
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
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
                <form action="/contact" onSubmit={this.handleSubmit} name="contact-form" id="contact-form" method="POST">
                        <input id="name" name="name" type="text" placeholder="name" required="required" onChange={this.handleChange}></input>
                        <input id="email" name="email" type="text" placeholder="email" required="required" onChange={this.handleChange}></input>
                        <input id="subject" name="subject" type="text" placeholder="subject" required="required" onChange={this.handleChange}></input>
                        <input id="question" name="question" type="text" placeholder="your question" required="required" onChange={this.handleChange}></input>
                        <button value="submit">Send Message</button>
                    </form>
                </div>

            </div>

        </React.Fragment>
    }

}
