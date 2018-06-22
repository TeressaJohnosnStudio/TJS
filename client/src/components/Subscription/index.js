import React from 'react';
import axios from 'axios';
import Option1 from './option1'

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
        console.log('Inquiry: ', this.state);
        let question = this.state.question;
        let flowerSelect = this.state.flowerSelect
        this.sendEmail(question, flowerSelect)
    }

    sendEmail = (question, flowerSelect) => {
        axios.post('/subscribe', { question, flowerSelect })
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
            
            <Option1 onClick={this.toggleOptions} />

                
        </React.Fragment >
    }
}



{/* <div className="wg">
<p>w + g</p>
</div>

<div className="more-info">
<p>Tell me more</p>
</div>

<div className="description">
<p>Recurring seasonal floral arrangements tailored to the home and workplace. We applaud you. You’re about to enlist in a simple luxury that can tremendously elevate your life. It’s sort of like the milkman delivery, only better… and prettier. Fresh, peak-of-the-season, local flowers? Yes? Yes.</p>
</div> */}
