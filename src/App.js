import React, { Component, Fragment } from "react";
import { Provider, Consumer } from "./context";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

class App extends Component {
	render() {
		return (
			<Provider>
				<Fragment>
					<Navbar />
					<Consumer>
						{value => (
							<div className="container">
								<Home />
							</div>
						)}
					</Consumer>
				</Fragment>
			</Provider>
		);
	}
}

export default App;
