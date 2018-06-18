import React from 'React';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navigation from '../Navigation';
import Home from '../Home';
import Contact from '../Contact';
import FAQ from '../FAQ';
import Gallery from '../Gallery';
import Info from '../Info';
import Reviews from '../Reviews';
import Blog from '../Blog';
import Subscription from '../Subscription';
import BlogForm from '../Blog/BlogForm';
import Post from '../Blog/Post';
import AdminNav from '../AdminNav';
import { BrowserHistory } from 'history';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Router>
        <div id="container">
          <AdminNav />
          <Navigation />
          <div id="content">
            <Route exact path="/" component={Home} />
            <Route path="/subscribe" component={Subscription} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/info" component={Info} />
            <Route path="/faq" component={FAQ} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/admin/blog/add" component={BlogForm} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
