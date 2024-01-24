import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import TheHeader from './components/TheHeader'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={Home}
				/>
				<Route
					path="/about"
					element={About}
				/>
			</Routes>
		</Router>
	)
}

export default App
