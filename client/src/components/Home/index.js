import React from 'react';
import './style.scss'

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <React.Fragment>
            <div className="hero">
                <img id="hero-img"></img>
            </div>

            <div className="row">
            <div className="column">
                <p className="colum-content">EVERYTHING THAT GROWS HOLDS IN PERFECTION BUT A LITTLE MOMENT
                   shakespeare | sonnet 15</p>
            </div>
            <div className="hexagon">
            </div>
            <div className="column">
                <p className="colum-content">WE LOVE WHAT WE DO
                We strive to provide exceptional design, products, and services within the realm of floral and event design because we love beauty and creation and, well, flowers.</p>
            </div>
            </div>
        </React.Fragment>
    }
}