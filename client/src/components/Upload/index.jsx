import React from 'react';
import axios from 'axios';
import './style.scss';

export default class Upload extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            image: null,
        };
    }

    onChange = (event) => {
        this.setState({
            image: event.target.files[0]
        })
        console.log('onChange event.target.files', event.target.files[0]);
    }

    onSubmit = (event) => {
        event.preventDefault();
        let data = new FormData();
        console.log('onSubmit this.state.image', this.state.image)
        data.append('image', this.state.image);
        console.log('onSubmit data.append', this.state.image);

        axios.post('/api/assets', data)
        .then(res => res.data)
        .catch(err => err.message)
    }

    render() {
        return <React.Fragment>
            <div>
                <form encType="multipart/form-data" onSubmit={this.onSubmit}>
                    <input type="file" onChange={this.onChange} name="image" />
                    <input type="submit" value="upload" />
                </form>
            </div>

        </React.Fragment>
    }

}
