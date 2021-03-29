import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

import { Switch, Route } from "react-router-dom";
import { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<Header />
				<main className="app-main">
					<Switch>
						<Route path="/" exact component={Menu} />
					</Switch>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
