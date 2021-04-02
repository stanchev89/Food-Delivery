import "./App.css";
import foodService from "./services/foodService";
import userService from "./services/userService";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Register from "./components/Register/Register"
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Order from "./components/Order/Order";
import Contacts from "./components/Contacts/Contacts";
import Posts from "./components/Posts/Posts";
import About from "./components/About/About";
import Conditions from "./components/Conditions/Conditions";


import {Switch, Route} from "react-router-dom";
import {Component} from "react";
import Cart from "./components/Cart/Cart";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [],
            currentUser: {}
        }
        this.setUser = this.setUser.bind(this)
        this.getUserInfo = this.getUserInfo.bind(this);
    }

    componentDidMount() {
        foodService.getDailyMenu()
            .then(dishes => {
                this.setState(state => ({...state, menu: dishes}))
            }).catch(err => console.error(err));
        userService.getUserInfo()
            .then(user => {
                if(user) {
                    this.setState((state) => ({currentUser: user.message ? undefined : user}))
                }
            }).catch(err => console.error(err));
    }

    setUser(user) {
        return this.setState((state) => (
            {
                currentUser: user
            }
            ))
    }

    getUserInfo() {
        userService.getUserInfo()
            .then(user => {
                console.log(user);
                this.setState((state) => ({...state, currentUser: user}))
            }).catch(err => console.error(err));
    }

    render() {
        return (
            <div className="App">
                <Header user={this.state.currentUser}/>
                <main className="app-main">
                    <Switch>

                        <Route path="/" exact render={(props) => (
                            <Menu {...props} menu={this.state.menu}
                                  user={this.state.currentUser}
                                  setUser={this.setUser}
                            />
                        )}/>

                        <Route path="/register" exact component={Register}/>

                        <Route path="/login" exact  render={(props) => (
                            <Login {...props} setUser={this.setUser}/>
                        )}/>
                        <Route path="/logout" exact render={(props) => (
                            <Logout {...props} setUser={this.setUser}/>
                        )}/>

                        <Route path="/cart" exact render={(props) => (
                            <Cart {...props} setUser={this.setUser} user={this.state.currentUser}/>
                        )}/>

                        <Route path="/order" exact render={(props) => (
                            <Order {...props} setUser={this.setUser} user={this.state.currentUser}/>
                        )}/>
                        <Route path="/contacts" exact component={Contacts}/>
                        <Route path="/posts" exact component={Posts}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/conditions" exact component={Conditions}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
