import "./App.css";
import foodService from "./services/foodService";
import userService from "./services/userService";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

import {Switch, Route} from "react-router-dom";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [],
            currentUser: {}
        }
    }

    componentDidMount() {
        foodService.getDailyMenu()
            .then(dishes => {
                this.setState(state => ({...state, menu: dishes}))
            }).catch(err => console.error(err));
        userService.getDemoUser()
            .then(user => {
                this.setState((state) => ({...state, currentUser: user}))
            }).catch(err => console.error(err));

    }

    render() {
        return (
            <div className="App">
                <Header/>
                <main className="app-main">
                    <Switch>

                        <Route path="/" exact render={(props) => (
                            <Menu {...props} menu={this.state.menu} user={this.state.currentUser}/>
                        )}/>

                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
