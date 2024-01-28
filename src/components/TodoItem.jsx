import React, { useState, useEffect } from 'react'
import useTodoStore from '../store/todos'

const titleSpliter = '##'

const TodoItem = ({ todoItem }) => {
	const { deleteTodo, updateTodo } = useTodoStore()
	const [task, setTask] = useState(todoItem.title.split(titleSpliter)[0])
	const [date, setDate] = useState(todoItem.title.split(titleSpliter)[1])
	const [done, setDone] = useState(todoItem.done)

	useEffect(() => {
		setTask(todoItem.title.split(titleSpliter)[0])
		setDate(todoItem.title.split(titleSpliter)[1])
		setDone(todoItem.done)
	}, [todoItem])

	const handleUpdate = () => {
		const title = task + titleSpliter + date
		updateTodo(todoItem.id, title, done)
	}

	const handleDelete = () => {
		deleteTodo(todoItem.id)
	}

	return (
		<div className="task">
			<h4 className="edit-date">
				최신 수정일: {todoItem.updatedAt.substring(0, 10)}
			</h4>
			<div className="edit-wrapper">
				<ul className="edit-task">
					<span className="material-symbols-outlined drag">drag_indicator</span>
					<li
						className="edit-task__item"
						style={{ display: 'none' }}>
						<input
							className="todo-id"
							defaultValue={todoItem.id}
							readOnly
						/>
					</li>
					<li className="edit-task__item">
						<input
							className="task-input"
							value={task}
							onChange={e => setTask(e.target.value)}
						/>
					</li>
					<li className="edit-task__item">
						<input
							className="date-input"
							type="date"
							value={date}
							onChange={e => setDate(e.target.value)}
						/>
					</li>
					<li className="edit-task__item">
						<select
							className="status-input"
							value={done.toString()}
							onChange={e => setDone(e.target.value === 'false')}>
							<option
								className="task-active"
								value="true">
								진행중
							</option>
							<option
								className="task-completed"
								value="false">
								완료
							</option>
						</select>
					</li>
					<li className="edit-task__item">
						<button
							type="submit"
							className="edit"
							onClick={handleUpdate}>
							<span className="material-symbols-outlined">edit_note</span>
						</button>
					</li>
					<li className="edit-task__item">
						<button
							className="delete"
							onClick={handleDelete}>
							<span className="material-symbols-outlined">remove</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default TodoItem
