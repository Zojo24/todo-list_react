import React from 'react'
import { deleteTodo, updateTodo } from '../store/todos'

const titleSpliter = '##'

const TodoItem = ({ todoItem }) => {
	const handleDelete = () => {
		deleteTodo(todoItem.id)
	}

	const handleUpdate = () => {
		const taskInput = document.querySelector('.task-input').value
		const dateInput = document.querySelector('.date-input').value
		const statusInput = document.querySelector('.status-input').value
		const done = statusInput === 'false'
		const title = taskInput + titleSpliter + dateInput
		updateTodo(todoItem.id, title, done)
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
							defaultValue={todoItem.title.split(titleSpliter)[0]}
						/>
					</li>
					<li className="edit-task__item">
						<input
							className="date-input"
							type="date"
							defaultValue={todoItem.title.split(titleSpliter)[1]}
						/>
					</li>
					<li className="edit-task__item">
						<select
							className="status-input"
							defaultValue={todoItem.done.toString()}>
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
