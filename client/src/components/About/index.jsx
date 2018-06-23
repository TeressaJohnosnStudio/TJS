import React from 'react';
import Upload from '../Upload'
import Banner from '../Banner';
import './style.scss';
import familyPhoto from '../../../assets/17_0429_Teressa_FAM015.jpg';


export default class About extends React.Component {
  render() {
    return (
      <div id="about">
        <Banner
          img={familyPhoto}
          caption="A LITTLE ABOUT US" />
        <div id="content">
          <div className="top-box">
            <p>We are a husband and wife team offering customized and unique floral and event design.</p>
          </div>
          <section id="info">
            <p>Teressa that&apos;s me! is the sole designer, and works closely with clients to transform concepts into reality. I really like people and I really like flowers, so it&apos;’s a pretty ideal situation. Bottom line on what drives my aesthetic: I love, LOVE, love using flowers, fruit, and foliage at the peak of their season. I&apos;ve also been known to play with unconventional and exciting materials. Further, vital to each project, regardless of scope, is a certain relevance and respect paid to the architecture and palette of its setting.</p>
            <p>Ryan he&apos;’s the backbone of this whole operation is our logistical hero and really should be walking around wearing a cape; he&apos;s that awesome.</p>
            <p>Caroline is our first blessing and we are so thankful for her. Right now, she&apos;s not super helpful with our events, but she&apos;s cute so it&apos;s okay.</p>
            <p>Benjamin brings life to any party or event, so much so that he has to stay home or no flower would survive his help. </p>
          </section>
        </div>
      </div>
    )

  }

}
