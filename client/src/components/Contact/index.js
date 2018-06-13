import React from 'react';

export default class Contact extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <React.Fragment>
            <div className="left">
                <div className="img"></div>
                <div className="media">
                    <img className="icon">pinterest</img>
                    <img className="icon">instagram</img>
                    <img className="icon">twitter</img>
                    <img className="icon">facebook</img>
                </div>
            </div>

            <div className="right">
                <div className="title">
                    <p>contact</p>
                </div>
                <div className="description">It turns out that I enjoy meeting people and I love coffee. So if you like those same things, let's be friends. &#123;253&#125; 709–9509</div>
                <div className="contact">
                    <form>
                        <input type="text" placeholder="name"></input>
                        <input type="text" placeholder="email"></input>
                        <input type="text" placeholder="subject"></input>
                        <input type="text" placeholder="your question"></input>
                        <button>Send Message</button>
                    </form>
                </div>

            </div>

        </React.Fragment>
    }
    
}