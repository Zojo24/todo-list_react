import React, { useState, useEffect } from 'react'
import { customFetch } from '../utils/fetchUtils'

const useTodoStore = () => {
	const [todoItems, setTodoItems] = useState([])
	const [loading, setLoading] = useState(false)

	const readTodo = async () => {
		setLoading(true)
		try {
			const response = await customFetch('/', { method: 'GET' })
			setTodoItems(response)
		} catch (error) {
			console.error('Error in readTodo:', error)
		} finally {
			setLoading(false)
		}
	}

	const createTodo = async title => {
		try {
			await customFetch('/', {
				method: 'POST',
				body: JSON.stringify({ title })
			})
			readTodo()
		} catch (error) {
			console.log('createTodo error:', error)
		}
	}

	const updateTodo = async (id, title, done) => {
		try {
			await customFetch(`/${id}`, {
				method: 'PUT',
				body: JSON.stringify({ title, done })
			})
			readTodo()
		} catch (error) {
			console.log('updateTodo error:', error)
		}
	}

	const deleteTodo = async id => {
		try {
			await customFetch(`/${id}`, {
				method: 'DELETE'
			})
			readTodo()
		} catch (error) {
			console.log('deleteTodo error:', error)
		}
	}

	const deleteAllTodo = async todoIds => {
		try {
			await customFetch('/deletions', {
				method: 'DELETE',
				body: JSON.stringify({ todoIds })
			})
			readTodo()
		} catch (error) {
			console.log('deleteAllTodo error:', error)
		}
	}

	const reorderTodo = async todoIds => {
		try {
			await customFetch('/reorder', {
				method: 'PUT',
				body: JSON.stringify({ todoIds })
			})
			readTodo()
		} catch (error) {
			console.log('reorderTodo error:', error)
		}
	}
	const handleCreateTodo = async event => {
		event.preventDefault()
		await createTodo(newTodoTitle)
		setNewTodoTitle('')
	}
	useEffect(() => {
		readTodo()
	}, [])

	return {
		todoItems,
		loading,
		createTodo,
		readTodo,
		updateTodo,
		deleteTodo,
		deleteAllTodo,
		reorderTodo
	}
}

export default useTodoStore
