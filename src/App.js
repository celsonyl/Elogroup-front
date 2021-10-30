import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import './App.css'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
