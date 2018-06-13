import React from 'react';

export default class Info extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <React.Fragment>
            <div className="left">
                <div>
                    <p>info</p>
                    <p>We are studio-based, meet by appointment only, and operate mostly in the Seattle area, though have been known to cross state borders now and then for the really special people.</p>
                </div>

                <div id="empty"></div>

                <div>
                    <p>OFFERINGS</p>
                    <p>&#123;Weddings&#125;: We love weddings! We love helping with weddings. Stumped on inspiration? Kinda uncertain how to get from point a: the foggy but specific dreams in your head to point b: reality? Know what you want and are capable of doing it but, hey, it’s your wedding and you have to get married so don’t even dare doing it yourself? We can help you no matter where you land on this spectrum.  &#123;The love of flowers&#125;: Who wouldn’t want a weekly subscription to fresh, local, and seasonal flowers in their front entry and by the bed side table? Better yet, why not even the office? And while you’re at it, what about sharing it with a friend as the perfect wedding gift? &#123;Here’s the deal&#125;: Due to the unique nature of our studio, the format of what we offer is flexible and completely customizable. Therefore, if you have any questions about fitting a service to your personal needs, please don’t hesitate to drop a line.</p>
                </div>
            </div>

            <div className="right">
                <div className="philosophy">
                    <p>PHILOSOPHY</p>
                    <img id="icon"></img>
                    <p>What makes us stand apart? Here’s a little secret. Ready? We are in this business because we love people and we love building relationships. Flowers and designing are the bonus, and as with any signature, you’re vetting us based on the cohesion of our style, our aesthetic, and our energy…But you must know that behind the artistry, there is a genuine love for people.</p>
                </div>
                
                <div>
                    <img id="recycle"></img>
                    <p>REDUCE, REUSE, WE GIVE:</p>
                    <p>For the clients who love cut flowers, but feel a twinge inside knowing their vase life is short, listen up. We are building partnerships within our community to share your leftover flowers so more people can enjoy them while you’re enjoying your honeymoon. We think this is brilliant, and are really excited about it. Also, for a nominal fee, we can rearrange your flowers and deliver as a gift to a recipient of your choice.</p>
                </div>

                <div>
                    <p>FEATURED BY</p>
                    <img id="medalion1"></img>
                    <img id="medalion2"></img>
                    <img id="medalion3"></img>
                    <img id="medalion4"></img>
                    <img id="medalion5"></img>
                </div>
            </div>
        </React.Fragment>
    }
    
}