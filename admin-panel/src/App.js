import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import { Component } from 'react';

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
        <Aside selectedPanel=""></Aside>
      </div>
    )
  }
}


export default App;
