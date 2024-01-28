import React, { useEffect, useState } from 'react'
import useTodoStore from '../store/todos'
import TodoItem from './TodoItem'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const SECOND_TO_MS = 100

const TodoList = () => {
	const [todoItemsFromState, setTodoItemsFromState] = useState([])
	const todoItems = useTodoStore(state => state.todoItems)
	const readTodo = useTodoStore(state => state.readTodo)
	const deleteAllTodo = useTodoStore(state => state.deleteAllTodo)
	const [filter, setFilter] = useState('all')
	const [pageList, setPageList] = useState([])

	useEffect(() => {
		readTodo()
	}, [readTodo])

	useEffect(() => {
		setPageList(todoItemsFromState)
	}, [todoItemsFromState])

	const handleDeleteAll = () => {
		const completedIds = todoItems
			.filter(item => item.done)
			.map(item => item.id)
		deleteAllTodo(completedIds)
	}

	const filteredItems = todoItemsArray.filter(item => {
		if (filter === 'all') return true
		if (filter === 'active') return !item.done
		if (filter === 'completed') return item.done
		return true
	})

	const onDragEnd = result => {
		if (!result.destination) return

		const updatedItems = reorder(
			[...pageList],
			result.source.index,
			result.destination.index
		)
		setPageList(updatedItems)
	}

	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list)
		const [removed] = result.splice(startIndex, 1)
		result.splice(endIndex, 0, removed)
		return result
	}

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

			<div className="sortable-todo-list">
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="todo-list">
						{provided => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}>
								{pageList.map((todoItem, index) => (
									<Draggable
										key={todoItem.id}
										draggableId={todoItem.id}
										index={index}>
										{provided => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}>
												{todoItem.text}
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
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
