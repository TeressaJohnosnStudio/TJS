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


class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div id="container">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/subscribe" component={Subscription} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={Info} />
          <Route path="/info" component={Info} />
          <Route path="/faq" component={FAQ} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
