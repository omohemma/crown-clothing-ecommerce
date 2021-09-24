import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

// Getting State In child Component Directly Using Redux Connect
// state is the root reducer that has access to other specific reducers
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

//HOC - Higher Order Component  is a function that take a component as am argument and return a new souped up component
export default connect(mapStateToProps)(Header);
