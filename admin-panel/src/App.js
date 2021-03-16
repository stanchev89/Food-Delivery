import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Header admin="Stefan"></Header>
        <Switch>
          <Route path="/user"/>
          <Route path="/food" component={Aside} />
        </Switch>
      </div>
    )
  }
}


export default App;
