
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';

const HatsPage =  (props) => (
  <div>
    <h1>This is the Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
