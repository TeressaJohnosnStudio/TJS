import React from 'react';

export default class Blog extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <React.Fragment>
            <div>
                <p>Name</p>
                <p>By Teressa</p>
                <p>Date</p>
                <p>Content</p>
            </div>


        </React.Fragment>
    }
    
}