import React from 'react';
import axios from 'axios';

export default class Option2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            flowerSelect: '',
            show2: false
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
        this.setState({ show2: !this.state.show2 })
    }

    render() {
        return <React.Fragment>
            <div>
                <div id="option2-container">
                    <p onClick={this.toggleOptions}>IMAGE 2</p>
                    {this.state.show2 ?
                        <div id="option2">
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
                        </div>
                        : null}
                </div>
            </div>
        </React.Fragment >
    }
}
