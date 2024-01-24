import React, { useState, useEffect } from 'react'
import useTodoStore from '../store/todos'

const AddTodo = () => {
	const [task, setTask] = useState('')
	const [date, setDate] = useState('')
	const createTodo = useTodoStore(state => state.createTodo)
	const loading = useTodoStore(state => state.loading)
	const MAX_INPUT_LENGTH = 13
	const titleSpliter = '##'

	const handleTaskChange = e => {
		const inputValue = e.target.value.slice(0, MAX_INPUT_LENGTH)
		setTask(inputValue)
	}

	const handleAddClick = () => {
		const title = task + titleSpliter + date
		createTodo(title)
		setTask('')
		setDate('')
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
							onClick={handleAddClick}
							disabled={loading} // Disable the button when loading
						>
							<span className="material-symbols-outlined">add</span>
						</button>
					)}
				</li>
			</ul>
		</div>
	)
}

export default AddTodo
