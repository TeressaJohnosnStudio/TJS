import React from 'react';
import './style.scss';
import Banner from '../Banner';
import bloomBlossom from '../../../assets/Gather1year-48.jpg';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
          <section id="home">
            <Banner img={bloomBlossom} caption="FOR EVERY DAY LIFE AND SPECIAL EVENTS"/>

            <div className="quote">
                <h2>EVERYTHING THAT GROWS HOLDS IN PERFECTION BUT A LITTLE MOMENT</h2>
                <p>shakespeare | sonnet 15</p>
            </div>

            <div className="purpose">
                <h2>WE LOVE WHAT WE DO</h2>
                <p>We strive to provide exceptional design, products, and services within the realm of floral and
                event design because we love beauty and creation and, well, flowers.</p>
            </div>
          </section>
        )
    }
}
