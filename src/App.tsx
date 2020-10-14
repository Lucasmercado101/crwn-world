import React from 'react';
import Header from './components/header';
import HomePage from './views/homepage';
import Shop from './views/shop';
import Checkout from './views/checkout';
import SignIn from './views/signIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Session from './unstated/session';

function App() {
  const { session } = Session.useContainer();

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/signin">
            {session ? <Redirect to="/" /> : <SignIn />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
