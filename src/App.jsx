import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import TheHeader from './components/TheHeader'

function App() {
	return (
		<>
			<TheHeader />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
			</Routes>
		</>
	)
}

export default App
