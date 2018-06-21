import React from 'react';
import Upload from '../Upload'
import './style.scss';


export default class About extends React.Component {
    render() {
        return <React.Fragment>
            <div className="left">
                <div className="about">
                    <p>about</p>
                </div>

                <div className="description">
                    <p>We are a husband and wife team offering customized and unique floral and event design.
                    </p>
                </div>

                <div className="family-photo">
                    <Upload />
                </div>
            </div>
            <div className="right">
                <div className="about-us">
                    <p>A LITTLE ABOUT US</p>
                    <p>Teressa &#123;that&apos;s me!&#125; is the sole designer, and works closely with clients to transform concepts into reality. I really like people and I really like flowers, so it&apos;s a pretty ideal situation. Bottom line on what drives my aesthetic: I love, LOVE, love using flowers, fruit, and foliage at the peak of their season. I&apos;ve also been known to play with unconventional and exciting materials. Further, vital to each project, regardless of scope, is a certain relevance and respect paid to the architecture and palette of its setting. Ryan &#123;he&apos;s the backbone of this whole operation&#125; is our logistical hero and really should be walking around wearing a cape; he&apos;s that awesome. Caroline is our biggest blessing and we are so thankful for her. Right now, she&apos;s not super helpful with our events, but she&apos;s cute so it&apos;s okay</p>
                </div>

                <div className="blog">
                    <p>A BLOG CALLED BLOG</p>
                    <p>The Heart + The Home Welcome to our home! And to the studio where all the work happens. This photoshoot is intended to inspire parties, to share our little oasis in the world, and to celebrate all the beauty that is our life. Much of what I gather for my work is pulled from all sorts of directions, though mostly always …</p>
                    <a href="#">Read more »</a>
                </div>
            </div>
        </React.Fragment>
    }

}
