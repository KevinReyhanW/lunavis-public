<template>
  <div class="login-page">
  
  <v-container 
    class="login-page fill-height d-flex align-center justify-center container-wrapper"
  >
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        
        <!-- Loading indicator -->
        <v-overlay :value="loading">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <!-- Login form field -->
        <v-card v-if="!isAuthenticated" class="pa-4 login-card">
        <v-img :src="require('@/assets/lunavislogo.png')" class="logo-image mb-4" contain />
          <v-card-title class="card-title">Visitor Management System</v-card-title>
          <v-card-text>

            <v-form @submit.prevent="handleLogin">

              <div class="field-label">Email</div>
              <v-text-field
                v-model="credentials.email"
                density="compact"
                label="Enter Your Email"
                type="email"
                prepend-inner-icon="mdi-email-outline"
                solo
                class= "white-filled"
              />

              <div class="field-label">Password</div>
              <v-text-field
                v-model="credentials.password"
                density="compact"
                label="Enter Your Password"
                type="password"
                prepend-inner-icon="mdi-key-outline"
                solo
                class= "white-filled"
              />
              <v-btn 
              type="submit" 
              class="mx-auto d-block login-button"
              >
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
  </div>
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

<style lang="scss">
@use '@/styles/login.scss';
</style>

