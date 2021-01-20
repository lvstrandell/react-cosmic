import React from 'react';

import GlobalStyle from './components/GlobalStyle';

import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';
import BlogListContainer from './containers/BlogListContainer';
import BlogPostContainer from './containers/BlogPostContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/om-mig" component={AboutContainer} />
          <Route path="/kontakt" component={ContactContainer} />
          <Route path="/blogg/:slug" component={BlogPostContainer} />
          <Route path="/blogg" component={BlogListContainer} />
          <Route path="/" component={HomeContainer} exact/>
        </Switch>
      </Router>
    </>
  )
}

export default App;