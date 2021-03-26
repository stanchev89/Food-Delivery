import './App.css';
import Header from './components/Header';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserPanel from './components/UserPanel';
import FoodPanel from './components/FoodPanel';
import Aside from './components/Aside'
import * as foodService from './services/foodService';
import * as userService from './services/userService';
const typeMenu = {
  allDishes: 'allDishes',
  dailyMenu: 'dailyMenu'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asideOptions: null,
      allDishes: [],
      dailyMenu: [],
      allUsers: [],
      currentUser: null
    }
    this.setAsideOptions = this.setAsideOptions.bind(this);
  }

  componentDidMount() {

    userService.getAllUsers().then(data => {
      if (data) {
        this.setState({ allUsers: data });
      }
    }).catch(err => console.log(err))

    userService.getProfileInfo().then(data => {
      if (data) {
        this.setState({ currentUser: data });
      }
    }).catch(err => console.log(err))
  }


  setAsideOptions(options) {
    this.setState({
      asideOptions: options
    });
    return;
  }

  render() {
    return (
      <div className="App">
        <Header admin="Stefan"></Header>
        <main className="app-main">
          <Aside options={this.state.asideOptions}></Aside>
          <section className="app-main-content">
            <Switch>
              <Route path="/user"
                render={(props) => (
                  <UserPanel {...props} currentUser={this.state.currentUser} allUsers={this.state.allUsers} setAsideOptions={this.setAsideOptions} />
                )}
              />
              <Route path="/food"
                render={(props) => (
                  <FoodPanel {...props} setAsideOptions={this.setAsideOptions}/>
                )}
              />

            </Switch>
          </section>

        </main>
      </div>
    )
  }
}


export default App;
