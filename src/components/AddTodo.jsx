import React, { useState, useEffect } from 'react'
import { createTodo, todoStore } from '../store/todos'

const AddTodo = () => {
	const [task, setTask] = useState('')
	const [date, setDate] = useState('')
	const [loading, setLoading] = useState(todoStore.state.loading)
	const MAX_INPUT_LENGTH = 13
	const titleSpliter = '##'

	useEffect(() => {
		const unsubscribe = todoStore.subscribe('loading', () => {
			setLoading(todoStore.state.loading)
		})

		return () => unsubscribe()
	}, [])

	const handleTaskChange = e => {
		const inputValue = e.target.value.slice(0, MAX_INPUT_LENGTH)
		setTask(inputValue)
	}

	const handleAddClick = () => {
		const title = task + titleSpliter + date
		createTodo(title)
	}

	return (
		<div className="add-todo">
			<ul className="new-input">
				<li className="new-input__item">
					<input
						className="task-input"
						placeholder="작업 내용을 작성해주세요."
						value={task}
						onChange={handleTaskChange}
					/>
				</li>
				<li className="new-input__item">
					<input
						className="date-input"
						type="date"
						value={date}
						onChange={e => setDate(e.target.value)}
					/>
				</li>
				<li className="new-input__item">
					{loading ? (
						<div className="loader"></div>
					) : (
						<button
							className="add"
							onClick={handleAddClick}>
							<span className="material-symbols-outlined">add</span>
						</button>
					)}
				</li>
			</ul>
		</div>
	)
}

export default AddTodo
