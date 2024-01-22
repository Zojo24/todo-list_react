import React from 'react'
import Headline from '../components/Headline'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

const Home = () => {
	return (
		<div className="container">
			<div className="home-wrapper">
				<Headline />
				<AddTodo />
				<TodoList />
			</div>
		</div>
	)
}

export default Home
