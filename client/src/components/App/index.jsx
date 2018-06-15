import React from 'React';
import {
  BrowserRouter,
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
import AdminNav from '../AdminNav';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div id="container">
          <AdminNav />
          <Navigation />
<<<<<<< HEAD
          <Route exact path="/" component={Home} />
          <Route path="/subscribe" component={Subscription} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={Info} />
          <Route path="/info" component={Info} />
          <Route path="/faq" component={FAQ} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
=======
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
>>>>>>> 2085a3586c841448a5f674ca44a0f2dba3134138
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
