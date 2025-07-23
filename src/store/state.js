export default {
  // Auth related state
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem('token') || null,

  // UI related state
  loading: false,
  snackbar: {
    show: false,
    text: '',
    color: 'success'
  },

  // App related state
  darkMode: localStorage.getItem('darkMode') === 'true' || false,
  
  // Example of feature related state
  todos: [],
  selectedTodo: null
}
