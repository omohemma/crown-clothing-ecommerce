import './App.css';
import { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/auth.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
  // Sync Google Account SIgn-0n To App
  unsubscribeFromAuth = null;

  componentDidMount() {
    // destructure this.props
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // If User Is Logged In and UserAuth is Not Null
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //Sync For Real Time Data From Firestore DB
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id, // user Id From Reference
            ...snapShot.data(), //Get User Data
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// arg1 will null because App Component doesn't use the state
export default connect(mapStateToProps, mapDispatchToProps)(App);
