import React from 'react';
import './style.scss'
import Option1 from './option1'
import Option2 from './option2'
import Option3 from './option3'


export default class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            flowerSelect: '',
            show1: false
        }
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

            <div className="img-options">
                <Option1 onClick={this.toggleOptions} />
                <Option2 onClick={this.toggleOptions} />
                <Option3 onClick={this.toggleOptions} />
            </div>

        </React.Fragment >
    }
}
