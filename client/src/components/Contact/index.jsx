import React from 'react';
import './style.scss';
import media1 from './assets/pinterest.png';
import media2 from './assets/instagram.png';
import media3 from './assets/twitter.png';
import media4 from './assets/facebook.png';
import Banner from '../Banner';
import contactPhoto from '../../../assets/17_0317_mass_download_2850.jpg';

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
        console.log('FORM SUBMISSION: ', this.state);
        let name = this.state.name;
        let email = this.state.email;
        let subject = this.state.subject;
        let question = this.state.question;
        this.sendEmail(name, email, subject, question);
    };

    sendEmail = (name, email, subject, question) => {
        axios.post('/contact', {name, email, subject, question})
    }


    render() {
        return <React.Fragment>
          <div id="contact">
            <Banner img={contactPhoto} caption="Contact Us" />
            <div id="content">
              <div className="social">
                <div className="img"></div>
                <div className="media">
                  <a href="https://www.pinterest.com/teressajohnson/"><img src={media1}/></a>
                  <a href="https://www.instagram.com/teressajohnson/"><img src={media2}/></a>
                  <a href="https://twitter.com/teressajstudio"><img src={media3}/></a>
                  <a href="https://www.facebook.com/teressa.johnson.studio"><img src={media4}/></a>
                </div>

            </div>

            <div className="right">
                <div className="title">
                    <p>contact</p>
                </div>
                <div className="description">It turns out that I enjoy meeting people and I love coffee. So if you like those same things, let's be friends. &#123;253&#125; 709–9509
                </div>

                <div className="contact">
                    <form onSubmit={this.handleSubmit} >
                        <input id="name" name="name" type="text" placeholder="name"  onChange={this.handleChange}></input>
                        <input id="email" name="email" type="text" placeholder="email"  onChange={this.handleChange}></input>
                        <input id="subject" name="subject"  type="text" placeholder="subject"  onChange={this.handleChange}></input>
                        <input id="question"name="question" type="text" placeholder="your question"  onChange={this.handleChange}></input>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

            </div>

        </React.Fragment>
    }
}
