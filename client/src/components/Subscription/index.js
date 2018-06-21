import React from 'react';
import axios from 'axios';

export default class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            flowerSelect: '',
            show: false
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
        console.log('Inquiry: ', this.state);
        let question = this.state.question;
        let flowerSelect = this.state.flowerSelect
        this.sendEmail(question, flowerSelect)
    }

    sendEmail = (question, flowerSelect) => {
        axios.post('/subscribe', { question, flowerSelect })
    }

    toggleOptions = () => {
        console.log('clicked')
        this.setState({ show: !this.state.show })
    }
    render() {
        return <React.Fragment>
            <div className="wg">
                <p>w + g</p>
            </div>

            <div className="more-info">
                <p>Tell me more</p>
            </div>

            <div className="description">
                <p>Recurring seasonal floral arrangements tailored to the home and workplace. We applaud you. You’re about to enlist in a simple luxury that can tremendously elevate your life. It’s sort of like the milkman delivery, only better… and prettier. Fresh, peak-of-the-season, local flowers? Yes? Yes.</p>
            </div>

            <div className="size-options">
                <ul>
                    <li>
                        <div id="option1-container">
                            <p onClick={this.toggleOptions}>IMAGE 1</p>
                        </div>
                        {this.state.show ?
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
                    </li>
                </ul>

                {/* <div id="option2">
                    <ul>
                        <li>
                            <img />
                            <p>OH, PICK ME!</p>
                            <p>$150.00</p>
                            <p>Ushering into thoughtful arrangement that which grows wild and free. These are the words to describe our aesthetic, and the words by which we design. Who wouldn't want to enter a space with such lovely thoughtfulness? Appealing to the eyes and to the imagination, this size is great for an entryway, foyer, or a living room and packed with sublime flowers that make an impressive statement. All flowers and foliage are season specific, but of course feel free to leave comments and we'll do our best to accommodate.
                    American grown | Locally resourced | Delivered Thursdays</p>
                            <form id="pickMe" onSubmit={this.handleSubmit}>
                                <select name="flowerSelect" className="flowerSelect" onChange={this.handleChange}>
                                    <option name="pickMeWeekly" value="Oh, pick me! ---- WEEKLY">Oh, pick me! : $150.00 USD - weekly </option>
                                    <option name="pickMeMonthly" value="Oh, pick me! --- MONTHLY">Oh, pick me! : $150.00 USD - monthly </option>
                                </select>
                                <p>Tell us more about your style and preferences (if you want to)</p>
                                <input name="question" type="text" onChange={this.handleChange}></input>
                                <button type="submit">BRING IT HOME</button>
                            </form>
                        </li>
                    </ul>
                </div>

                <div id="option3">
                    <ul>
                        <li>
                            <img />
                            <p>WHY, HELLO!</p>
                            <p>$300.00</p>
                            <p>Why, hello! Transform a space and respect its architecture, and for goodness sake, let's bring in some flowers! Dramatic, large, and boasting a large variety of blooms, this type of arrangement will turn heads and make them swoon. Perfect for grand entrances, reception desks, and spiraling staircases, this size will be a showstopper. All flowers and foliage are season specific, but of couse feel free to leave comments and we'll do our best to accommodate. American grown | Locally resourced | Delivered Thursdays</p>
                            <form id="whyHelo" onSubmit={this.handleSubmit}>
                                <select name="flowerSelect" onChange={this.handleChange}>
                                    <option name="whyHelloWeekly" value="Why, Hello ---- WEEKLY">Why, hello! : $300.00 USD - weekly </option>
                                    <option name="whyHelloMonthly" value="Why, Hello ---- MONTHLY">Why, hello!  : $300.00 USD - monthly </option>
                                </select>
                                <p>Tell us more about your style and preferences (if you want to)</p>
                                <input name="question" type="text" onChange={this.handleChange}></input>
                                <button type="submit">BRING IT HOME</button>
                            </form>
                        </li>
                    </ul>
                </div> */}

            </div>
        </React.Fragment >
    }

}
