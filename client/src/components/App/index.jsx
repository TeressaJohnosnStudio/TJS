import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navigation from '../Navigation';
import Home from '../Home';
import Contact from '../Contact';
import FAQ from '../FAQ';
import Gallery from '../Gallery';
import About from '../About';
import Info from '../Info';
import Reviews from '../Reviews';
import Blog from '../Blog';
import Subscription from '../Subscription';
import BlogForm from '../Blog/BlogForm';
import Post from '../Blog/Post';
import Footer from '../Footer';
import AdminNav from '../AdminNav';
import './normalize.scss';
import './style.scss';

import { connect } from 'react-redux';
import { deletePost, updatingPostStart, updatingPostEnd } from '../../actions/blogActions';

const mapDispatchToProps = dispatch => {
  return {
    deletePost: postId => dispatch(deletePost(postId)),
    updatingPost: postId => dispatch(updatingPost(postId)),
    updatingPostStart: postId => dispatch(updatingPostStart()),
    updatingPostStop: postId => dispatch(updatingPostStop())
  }
}

class App extends React.Component {

  constructor(props){
    super(props)
  }

  removePost = postId => {
    this.props.deletePost(postId);
  }

  startEditing = () => {
    this.props.updatingPostStart();
  }

  stopEditing = () => {
    this.props.updatingPostEnd();
  }

  render() {
    return (
      <Router>
        <div>
          <AdminNav />
          <Navigation />

          <div id="container">
            <Route exact path="/" component={Home} />
            <Route path="/subscribe" component={Subscription} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} />
            <Route path="/info" component={Info} />
            <Route path="/faq" component={FAQ} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/admin/blog/add" component={BlogForm} />
            <Route path='/blog/:_id'
              render={props => <Post
                startEditing={this.startEditing}
                stopEditing={this.stopEditing}
                removePost={this.removePost} {...props}/>}
            />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect(null, mapDispatchToProps)(App);
