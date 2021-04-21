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


import {Route, Switch} from "react-router-dom";
import {Component} from "react";
import Cart from "./components/Cart/Cart";
import Notification from "./components/Notification/Notification";
import Profile from "./components/Profile/Profile";
import UserContext from "./context/UserContext";
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [],
            currentUser: undefined,
            notification: {
                message: '',
                type: ''
            }
        }
        this.setUser = this.setUser.bind(this)
        this.getUserInfo = this.getUserInfo.bind(this);
        this.setNotification = this.setNotification.bind(this);
    }

    componentDidMount() {
        foodService.getDailyMenu()
            .then(dishes => {
                this.setState(state => ({...state, menu: dishes}))
            }).catch(err => console.error(err));
        userService.getUserInfo()
            .then(user => {
                if (user) {
                    this.setState((state) => ({currentUser: user.message ? undefined : user}))
                }
            }).catch(err => console.error(err));
    }

    setUser(user) {
        return this.setState((state) => (
            {
                ...state,
                currentUser: user
            }
        ))
    }

    setNotification(notification) {
        return this.setState((state) => (
            {
                ...state,
                notification
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
                <UserContext.Provider value={[this.state.currentUser, this.setUser]}>
                    <Header/>
                    {
                        this.state.notification.message
                            ? <Notification
                                notification={this.state.notification}
                                setNotification={this.setNotification}
                            />
                            : null
                    }
                    <main className="app-main">
                        <ErrorBoundary>
                            <Switch>

                                <Route path="/" exact render={(props) => (
                                    <Menu {...props}
                                          menu={this.state.menu}
                                          setNotification={this.setNotification}
                                    />
                                )}/>

                                <Route path="/register" exact render={(props) => (
                                    <Register {...props}
                                              setNotification={this.setNotification}
                                    />
                                )}/>

                                <Route path="/login" exact render={(props) => (
                                    <Login {...props}
                                           setNotification={this.setNotification}
                                    />
                                )}/>

                                <Route path="/profile" render={(props) => (
                                    <Profile {...props}
                                             setNotification={this.setNotification}
                                    />
                                )}/>


                                <Route path="/logout" exact component={Logout}/>

                                <Route path="/cart" exact render={(props) => (
                                    <Cart {...props}
                                          setNotification={this.setNotification}
                                    />
                                )}/>

                                <Route path="/order" exact render={(props) => (
                                    <Order {...props}
                                           setNotification={this.setNotification}
                                    />
                                )}/>

                                <Route path="/posts" exact render={(props) => (
                                    <Posts {...props}
                                           setNotification={this.setNotification}
                                    />
                                )}/>
                                <Route path="/contacts" exact component={Contacts}/>
                                <Route path="/about" exact component={About}/>
                                <Route path="/conditions" exact component={Conditions}/>
                            </Switch>
                        </ErrorBoundary>
                    </main>
                    <Footer/>
                </UserContext.Provider>
            </div>
        );
    }
}

export default App;
