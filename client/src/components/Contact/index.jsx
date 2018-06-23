import React from 'react';
import './style.scss';
import media1 from './assets/pinterest.png';
import media2 from './assets/instagram.png';
import media3 from './assets/twitter.png';
import media4 from './assets/facebook.png';
import Banner from '../Banner';
import Upload from '../Upload';
import contactPhoto from '../../../assets/17_0317_mass_download_2850.jpg';

export default class Contact extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <React.Fragment>
          <div id="contact">
            <Banner img={contactPhoto} caption="Contact Us" />
            <div id="content">
              <div className="social">
                <div className="img"></div>
                <div className="media">
                  <a href="https://www.pinterest.com/teressajohnson/"><img src={media1}/></a>
                  <a href="https://www.instagram.com/teressajohnson/"><img src={media2}/></a>
                  <a href="https://twitter.com/teressajstudio"><img src={media3}/></a>
                  <a href="https://www.facebook.com/teressa.johnson.studio"><img src={media4}/></a>
                </div>
              </div>
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
