import React from 'react';
import axios from 'axios';
import option3 from './assets/tjs_wild-gathered_013.jpg'

export default class Option3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            flowerSelect: '',
            show3: false
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
        this.setState({ show3: !this.state.show3 })
    }

    render() {
        return <React.Fragment>
            <div id="option3">
                <div id="option3-container">
                    <img src={option3}onClick={this.toggleOptions} width="250" height="250"></img>
                    {this.state.show3 ?
                        <div id="option3">
                            <img />
                            <p>WHY, HELLO!</p>
                            <p>$$$</p>
                            <p>Why, hello! Transform a space and respect its architecture, and for goodness sake, let's bring in some flowers! Dramatic, large, and boasting a large variety of blooms, this type of arrangement will turn heads and make them swoon. Perfect for grand entrances, reception desks, and spiraling staircases, this size will be a showstopper. All flowers and foliage are season specific, but of couse feel free to leave comments and we'll do our best to accommodate. American grown | Locally resourced | Delivered Thursdays</p>
                            <form id="whyHelo" onSubmit={this.handleSubmit}>
                                <select name="flowerSelect" onChange={this.handleChange}>
                                    <option name="whyHelloWeekly" value="Why, Hello ---- WEEKLY">Why, hello! : $$$ USD - weekly </option>
                                    <option name="whyHelloMonthly" value="Why, Hello ---- MONTHLY">Why, hello!  : $$$ USD - monthly </option>
                                </select>
                                <p>Tell us more about your style and preferences (if you want to)</p>
                                <input className="question" name="question" type="text" placeholder="Question" onChange={this.handleChange}></input>
                                <button  className="sub-button" type="submit">BRING IT HOME</button>
                            </form>
                        </div>
                        : null}
                </div>
            </div>
        </React.Fragment >
    }
}
