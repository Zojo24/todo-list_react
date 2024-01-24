import { create } from 'zustand'
import { customFetch } from '../utils/fetchUtils'

const useTodoStore = create(set => ({
	todoItems: [],
	loading: false,
	createTodo: async title => {
		try {
			await customFetch('/', {
				method: 'POST',
				body: JSON.stringify({
					title
				})
			})
			set({ loading: true })
			await useTodoStore.getState().readTodo()
			set({ loading: false })
		} catch (error) {
			console.error('createTodo error:', error)
		}
	},
	readTodo: async () => {
		set({ loading: true })
		try {
			const response = await customFetch('/', {
				method: 'GET'
			})
			set({ todoItems: response, loading: false })
		} catch (error) {
			console.error('Error in readTodo:', error)
			set({ loading: false })
		}
	},

	updateTodo: async (id, title, done) => {
		await customFetch(`/${id}`, {
			method: 'PUT',
			body: JSON.stringify({
				title,
				done
			})
		})
		set({ loading: true })
		await set(prevState => ({
			todoItems: prevState.todoItems.map(item =>
				item.id === id ? { ...item, title, done } : item
			),
			loading: false
		}))
	},
	deleteTodo: async id => {
		await customFetch(`/${id}`, {
			method: 'DELETE'
		})
		set({ loading: true })
		await set(prevState => ({
			todoItems: prevState.todoItems.filter(item => item.id !== id),
			loading: false
		}))
	},
	deleteAllTodo: async todoIds => {
		await customFetch(`/deletions`, {
			method: 'DELETE',
			body: JSON.stringify({
				todoIds
			})
		})
		set({ loading: true })
		await set(prevState => ({
			todoItems: prevState.todoItems.filter(item => !todoIds.includes(item.id)),
			loading: false
		}))
	},
	reorderTodo: async todoIds => {
		await customFetch(`/reorder`, {
			method: 'PUT',
			body: JSON.stringify({
				todoIds
			})
		})
		set({ loading: true })
		await set(prevState => ({
			todoItems: prevState.todoItems.slice().sort((a, b) => {
				const aIndex = todoIds.indexOf(a.id)
				const bIndex = todoIds.indexOf(b.id)
				return aIndex - bIndex
			}),
			loading: false
		}))
	}
}))
export default useTodoStore
