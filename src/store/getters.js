// Getters are like computed properties for your store
// They can be used to filter or transform store state
export default {
  // Auth getters
  isAuthenticated: state => state.isAuthenticated,
  currentUser: state => state.user,
  
  // UI getters
  isLoading: state => state.loading,
  snackbar: state => state.snackbar,
  
  // App getters
  isDarkMode: state => state.darkMode,
  
  // Feature getters
  completedTodos: state => state.todos.filter(todo => todo.completed),
  pendingTodos: state => state.todos.filter(todo => !todo.completed),
  todoById: (state) => (id) => state.todos.find(todo => todo.id === id)
}
