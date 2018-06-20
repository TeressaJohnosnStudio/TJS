import React from 'react';
// import './style.scss';


export default class Subscription extends React.Component {
    constructor(props) {
        super(props);
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
                <div id="option1">
                    <img />
                    <p>YES, LOVELY.</p>
                </div>

                <div id="option2">
                    <img />
                    <p>OH, PICK ME!</p>
                </div>

                <div id="option3">
                    <img />
                    <p>WHY, HELLO!</p>
                </div>
            </div>
        </React.Fragment>
    }

}
