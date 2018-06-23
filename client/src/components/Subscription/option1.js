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
                    <div id="option1-container">
                        <img src={option1} onClick={this.toggleOptions} width="250" height="250"></img>
                        {this.state.show1 ?
                            <div id="option1"  >
                                <p>YES, LOVELY.</p>
                                <p>$</p>
                                <p>Flowers have been known to bring happy energy to a space. This sweet little number will brighten it up and leave you feeling balanced and lively. This image is an example of size and feel. All flowers and foliage are season specific, but of course feel free to leave comments and we'll do our best to accomodate.</p>
                                <form id="lovely" onSubmit={this.handleSubmit}>
                                    <select name="flowerSelect" onChange={this.handleChange}>
                                        <option name="lovelyWeekly" value="Yes, Lovely --- Weekly">Yes, Lovely. : $ USD - weekly </option>
                                        <option name="lovelyWonthly" value="Yes, Lovely --- Monthly">Yes, Lovely. : $ USD - monthly </option>
                                    </select>
                                    <p>Tell us more about your style and preferences (if you want to)</p>
                                    <input className="question" name="question" type="text" placeholder="Question" onChange={this.handleChange}></input>
                                    <button className="sub-button" type="submit">BRING IT HOME</button>
                                </form>
                            </div>
                            : null}
                    </div>
        </React.Fragment >
    }
}
