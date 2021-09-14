import './App.css';
import {Component} from "react";

import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/auth.component';

class App extends Component() {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }

  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/sign-in" component={AuthPage}></Route>
        </Switch>
      </div>
    );
  }

}

export default App;
