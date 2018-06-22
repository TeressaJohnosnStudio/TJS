import React from 'react';
import axios from 'axios';
import option1 from './assets/tjs_wild-gathered_011.jpg'

export default class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            flowerSelect: '',
            show1: false
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            question: e.target.value,
            flowerSelect: e.target.value
        });
        console.log('Inquiry: ', this.state.question, this.state.flowerSelect);
        let question = this.state.question;
        let flowerSelect = this.state.flowerSelect
        this.sendEmail(question, flowerSelect)
    }

    sendEmail = (question, flowerSelect) => {
        axios.post('/subscribe', { question, flowerSelect })
    }

    toggleOptions = () => {
        console.log('clicked')
        this.setState({ show1: !this.state.show1 })
    }

    render() {
        return <React.Fragment>
                <div>
                    <div id="option1-container">
                        <img src={option1} onClick={this.toggleOptions} width="400" height="400"></img>
                        {this.state.show1 ?
                            <div id="option1"  >
                                <p>YES, LOVELY.</p>
                                <p>$75.00</p>
                                <p>Flowers have been known to bring happy energy to a space. This sweet little number will brighten it up and leave you feeling balanced and lively. This image is an example of size and feel. All flowers and foliage are season specific, but of course feel free to leave comments and we'll do our best to accomodate.</p>
                                <form id="lovely" onSubmit={this.handleSubmit}>
                                    <select name="flowerSelect" onChange={this.handleChange}>
                                        <option name="lovelyWeekly" value="Yes, Lovely --- Weekly">Yes, Lovely. : $75.00 USD - weekly </option>
                                        <option name="lovelyWonthly" value="Yes, Lovely --- Monthly">Yes, Lovely. : $75.00 USD - monthly </option>
                                    </select>
                                    <p>Tell us more about your style and preferences (if you want to)</p>
                                    <input name="question" type="text" onChange={this.handleChange}></input>
                                    <button type="submit">BRING IT HOME</button>
                                </form>
                            </div>
                            : null}
                    </div>
                </div>
        </React.Fragment >
    }
}
