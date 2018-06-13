import React from 'react';

export default class FAQ extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <React.Fragment>
            <div className="left">
                <div className="title"></div>
                <div className="empty"></div>
                <div className="img"></div>
            </div>
            <div className="FAQ">
                <h2>FREQUENTLY ANSWERED QUESTIONS</h2>
                <div className="questions">

                    <ul>
                        <li>I can buy flowers at the market for $15. Why do your flowers cost so much?</li>
                        <ul>
                            <li>In general, most market (like from Pike Place) flowers are field quality, which means they don’t last as long as professional grower quality flowers.  Therefore, while pretty and no doubt easy on the wallet, we find them difficult to pass our standard of acceptability.

                            Our prices are driven by many variables, including the raw cost of local and sustainable flowers*, the design expertise involved in customizing them, as well as the time to resource, edit, and arrange.

                            *our default resource, when available</li>
                        </ul>
                    </ul>

                    <ul>
                        <li>What are some of the differences between a floral + event designer and a florist?</li>
                        <ul>
                            <li>It’s important to note that not all professionals in these two veins of the industry fit into these basic rubrics. However, for all intents and purposes, this is a general rundown of the differences.

                            Typically, a floral + event designer joins the event in the early to mid-stages of event planning and maintains involvement through completion. Designers generally work alongside the client and the coordinator to cast a vision and pull together the resources necessary to execute that vision. The role includes full service attention in all aspects of design, décor, and flowers. Because this is such a customization centered and involved position, rates tend to run higher than a traditional florist. Hiring a floral + event designer is recommended for the client who holds flowers and design as a top priority for their event.

                            Please keep in mind that not all florists offer the same services, but as a rule, they are much less involved in the underpinnings of the actual event. This is a great route to choose if flowers are not the highest priority in the line item of the budget.</li>
                        </ul>
                    </ul>

                    <ul>
                        <li>What do you think about enlisting help from my friends and family? It seems like a perfect way to cut some corners.</li>
                        <ul>
                            <li>The idea of gathering your most creative and talented friends and family to assemble your dream event is a great one. Under different circumstances, it is most certainly the way to go. However, because we care, and have seen so many well-intended but poorly executed DIY weddings, we’ll offer a couple details to consider.

                            First, if you put people in charge of doing something for your wedding day, you can guarantee that they will stress out about making it perfect for you. Chances are, if you honor them with a task for your wedding, whether the breadth of their knowledge is much or little, they will feel the pressure.

                            Second, if they are occupied with anything other than being with you and/or other family and friends, they will miss all the important stuff. These moments only happen once in a lifetime, and it seems priceless to have those closest to you actually close to you on the day.

                            Third, it could damage some relationships. Stress, emotions, and lack of communication can take their toll on even the most intact friendships. Better to leave professional work to the professionals, and let your mind rest in trusting that you can enjoy your day, because you trust your people.</li>
                        </ul>
                    </ul>

                    <ul>
                        <li>We are committed to our budget, but it seems lean. Is it still worthwhile to chat about options?</li>
                        <ul>
                            <li>Absolutely. Good design is good problem solving. Before we meet though, we will briefly discuss your needs and see about coming up with a loose pricing range to see if we’re in the same ballpark and if we have any flexibility.</li>
                        </ul>
                    </ul>

                    <ul>
                        <li>Are your flowers and resources local, and are they cultivated in a sustainable manner?</li>
                        <ul>
                            <li>Yes. Inasmuch as possible, we resource everything we can from as local as we can. We have a strong conviction about this so our policy is basic: local first.</li>
                        </ul>
                    </ul>

                    <ul>
                        <li>Are you willing to travel?</li>
                        <ul>
                            <li>If your event is important enough to you to be asking this question, the answer is yes. When there’s a will there’s a way. We are flexible and willing to travel the interstates, the oceans, and the friendly skies for you.</li>
                        </ul>
                    </ul>

                    <ul>
                        <li>What does studio-based mean?</li>
                        <ul>
                            <li>It means we don’t have a storefront. It means we don’t have crazy overhead. It means if you come to visit, you’ll get a tasty treat in our kitchen, but not a flower arrangement you can pick up real quick to bring to your hosts that night. It also means that we work out of our home predominately, and set up shop wherever needed to make things right for our clients.</li>
                        </ul>
                    </ul>

                </div>

            </div>

        </React.Fragment>
    }
    
}