import api from '@/services/api'

// Actions can be asynchronous and can commit multiple mutations
export default {
  // Auth actions
  async login({ commit }, credentials) {
    commit('SET_LOADING', true)
    try {
      // Example API call
      const response = await api.post('/auth/login', credentials)
      const { user, token } = response.data
      
      commit('SET_TOKEN', token)
      commit('SET_USER', user)
      commit('SET_AUTH', true)
      commit('SHOW_SNACKBAR', { 
        text: 'Successfully logged in!',
        color: 'success'
      })
      
      return response
    } catch (error) {
      commit('SHOW_SNACKBAR', {
        text: error.message || 'Login failed',
        color: 'error'
      })
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  },

  logout({ commit }) {
    commit('SET_AUTH', false)
    commit('SET_USER', null)
    commit('SET_TOKEN', null)
    localStorage.removeItem('token')
    commit('SHOW_SNACKBAR', { 
      text: 'Successfully logged out',
      color: 'success'
    })
  },

  // UI actions
  showMessage({ commit }, { text, color }) {
    commit('SHOW_SNACKBAR', { text, color })
    // Auto hide after 3 seconds
    setTimeout(() => {
      commit('HIDE_SNACKBAR')
    }, 3000)
  },

  // App actions
  toggleDarkMode({ commit, state }) {
    commit('SET_DARK_MODE', !state.darkMode)
  },

  // Feature actions
  async fetchTodos({ commit }) {
    commit('SET_LOADING', true)
    try {
      const response = await api.get('/todos')
      commit('SET_TODOS', response.data)
    } catch (error) {
      commit('SHOW_SNACKBAR', {
        text: 'Failed to fetch todos',
        color: 'error'
      })
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async addTodo({ commit }, todo) {
    try {
      const response = await api.post('/todos', todo)
      commit('ADD_TODO', response.data)
      commit('SHOW_SNACKBAR', {
        text: 'Todo added successfully',
        color: 'success'
      })
    } catch (error) {
      commit('SHOW_SNACKBAR', {
        text: 'Failed to add todo',
        color: 'error'
      })
    }
  }
}
