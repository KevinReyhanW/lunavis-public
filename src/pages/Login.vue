<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-img :src="require('@/assets/lunavislogo.png')" max-height="100" contain class="mb-4" />
        <!-- Loading indicator -->
        <v-overlay :value="loading">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <!-- Login form -->
        <v-card v-if="!isAuthenticated" class="pa-4">
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-text-field
                v-model="credentials.email"
                label="Email"
                type="email"
                required
              />
              <v-text-field
                v-model="credentials.password"
                label="Password"
                type="password"
                required
              />
              <v-btn type="submit" color="primary" block>
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>

        <!-- User info -->
        <v-card v-else class="pa-4">
          <v-card-title>Welcome, {{ currentUser?.name }}!</v-card-title>
          <v-card-actions>
            <v-btn @click="handleLogout" color="error">
              Logout
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Snackbar for messages -->
        <v-snackbar
          v-model="snackbar.show"
          :color="snackbar.color"
          timeout="3000"
        >
          {{ snackbar.text }}
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },

  computed: {
    // Map multiple store state properties
    ...mapState(['loading', 'snackbar']),
    
    // Map store getters
    ...mapGetters(['isAuthenticated', 'currentUser'])
  },

  methods: {
    // Map store actions
    ...mapActions(['login', 'logout', 'showMessage']),

    async handleLogin() {
      try {
        await this.login(this.credentials)
        // Login successful - router will handle navigation
      } catch (error) {
        // Error already handled in action
        console.error('Login failed:', error)
      }
    },

    async handleLogout() {
      await this.logout()
      // Router will handle navigation
    }
  }
}
</script>
