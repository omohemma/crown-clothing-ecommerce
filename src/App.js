import './App.css';
import {Component} from "react";

import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/auth.component';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // Sync Google Account SIgn-0n To App
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      // this.setState({currentUser: user});
     createUserProfileDocument(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
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
