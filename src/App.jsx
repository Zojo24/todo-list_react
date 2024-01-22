import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Header from './components/Header'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route
					path="/"
					exact
					component={Home}
				/>
				<Route
					path="/about"
					component={About}
				/>
			</Switch>
		</Router>
	)
}

export default App
