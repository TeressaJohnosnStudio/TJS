import React from 'React';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Navigation from '../Navigation';


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
          <Route path="/subscribe" component={Subscribe} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/info" component={Info} />
          <Route path="/faq" component={Faq} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />   
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
