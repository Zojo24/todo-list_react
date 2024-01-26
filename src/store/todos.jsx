import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useTodoStore = create(
	devtools((set, get) => ({
		todoItems: [],
		loading: false,

		setLoading: loading => set({ loading }),

		setTodoItems: todoItems => set({ todoItems }),

		customFetch: async (url, options) => {
			try {
				const response = await fetch(url, options)
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			} catch (error) {
				console.error('Network error:', error)
				throw ErrorEvent
			}
		},
		readTodo: async () => {
			get().setLoading(true)
			try {
				const response = await get().customFetch(
					`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							apikey: 'KDT7_GrZ1eYBo',
							username: 'KDT7_ChoiHongJoo'
						}
					}
				)

				if (Array.isArray(response)) {
					get().setTodoItems(response)
				} else {
					console.error('Expected an array of todos, but received:', response)
					get().setTodoItems([])
				}
			} catch (error) {
				console.error('Error in readTodo:', error)
				get().setTodoItems([])
			} finally {
				get().setLoading(false)
			}
		},
		updateTodo: async (id, title, done) => {
			try {
				await get().customFetch(
					`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
					{
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ title, done })
					}
				)
				get().readTodo()
			} catch (error) {
				console.error(`Error updating todo with ID ${id}:`, error)
			}
		},

		deleteTodo: async id => {
			try {
				await get().customFetch(
					`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
					{
						method: 'DELETE'
					}
				)
				get().readTodo()
			} catch (error) {
				console.error(`Error deleting todo with ID ${id}:`, error)
			}
		},

		deleteAllTodo: async todoIds => {
			try {
				await get().customFetch(
					`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/deletions`,
					{
						method: 'DELETE',
						body: JSON.stringify({ todoIds })
					}
				)
				get().readTodo()
			} catch (error) {
				console.error('Error deleting all todos:', error)
			}
		},

		reorderTodo: async todoIds => {
			try {
				await get().customFetch(
					`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/reorder`,
					{
						method: 'PUT',
						body: JSON.stringify({ todoIds })
					}
				)
				get().readTodo()
			} catch (error) {
				console.error('Error reordering todos:', error)
			}
		}
	}))
)

export default useTodoStore
