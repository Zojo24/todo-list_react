import React, { useEffect, useState } from 'react'
import useTodoStore from '../store/todos'
import TodoItem from './TodoItem'

const SECOND_TO_MS = 100

const TodoList = () => {
	const todoItems = useTodoStore(state => state.todoItems) // Access todoItems state
	const readTodo = useTodoStore(state => state.readTodo) // Access readTodo action
	const deleteAllTodo = useTodoStore(state => state.deleteAllTodo) // Access deleteAllTodo action
	const [filter, setFilter] = useState('all') // Added state for filter

	useEffect(() => {
		readTodo()
	}, [readTodo]) // readTodo as a dependency

	const handleDeleteAll = () => {
		const completedIds = todoItems
			.filter(item => item.done)
			.map(item => item.id)
		deleteAllTodo(completedIds)
	}

	const filteredItems = todoItems.filter(item => {
		if (filter === 'all') return true
		if (filter === 'active') return !item.done
		if (filter === 'completed') return item.done
		return true
	})

	return (
		<div className="todo-list">
			<div className="filter">
				<button
					type="button"
					onClick={() => setFilter('all')}>
					전체보기
				</button>
				<button
					type="button"
					onClick={() => setFilter('active')}>
					진행중
				</button>
				<button
					type="button"
					onClick={() => setFilter('completed')}>
					완료
				</button>
				<button
					type="button"
					onClick={handleDeleteAll}>
					완료 삭제
				</button>
			</div>
			<div className="todo-item">
				{filteredItems.map(todoItem => (
					<TodoItem
						key={todoItem.id}
						todoItem={todoItem}
					/>
				))}
			</div>
		</div>
	)
}

export default TodoList
