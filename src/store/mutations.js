// Mutations are the only way to change state in Vuex
// They must be synchronous
export default {
  // Auth mutations
  SET_AUTH(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },

  // UI mutations
  SET_LOADING(state, value) {
    state.loading = value
  },
  SHOW_SNACKBAR(state, { text, color = 'success' }) {
    state.snackbar.show = true
    state.snackbar.text = text
    state.snackbar.color = color
  },
  HIDE_SNACKBAR(state) {
    state.snackbar.show = false
  },

  // App mutations
  SET_DARK_MODE(state, value) {
    state.darkMode = value
    localStorage.setItem('darkMode', value)
  },

  // Feature mutations
  SET_TODOS(state, todos) {
    state.todos = todos
  },
  ADD_TODO(state, todo) {
    state.todos.push(todo)
  },
  UPDATE_TODO(state, updatedTodo) {
    const index = state.todos.findIndex(t => t.id === updatedTodo.id)
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo)
    }
  },
  DELETE_TODO(state, todoId) {
    state.todos = state.todos.filter(t => t.id !== todoId)
  }
}
