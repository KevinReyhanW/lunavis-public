<template>
  <div class="login-page-kiosk">
    <v-container fluid fill-height class="pa-0">
      <v-layout row fill-height>

        <!-- Sidebar kiri -->
        <v-flex xs12 md4 class="sidebar-container">
          <LoginSidebar />
        </v-flex>

        <!-- Form login kanan -->
        <v-flex xs12 md6 class="form-container d-flex align-center justify-center">
          <v-container>
            <!-- Loading indicator -->
            <v-overlay :value="loading">
              <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>

            <!-- Login form -->
            <v-card v-if="!isAuthenticated" class="pa-4 login-card">
              <v-img :src="require('@/assets/lunavislogo.png')" class="logo-kiosk mb-4" contain />
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
                    class="white-filled"
                  />

                  <div class="field-label">Password</div>
                  <v-text-field
                    v-model="credentials.password"
                    density="compact"
                    label="Enter Your Password"
                    type="password"
                    prepend-inner-icon="mdi-key-outline"
                    solo
                    class="white-filled"
                  />

                  <v-btn type="submit" class="mx-auto d-block login-button">Login</v-btn>
                </v-form>
              </v-card-text>
            </v-card>

            <!-- User info -->
            <v-card v-else class="pa-4">
              <v-card-title>Welcome, {{ currentUser?.name }}!</v-card-title>
              <v-card-actions>
                <v-btn @click="handleLogout" color="error">Logout</v-btn>
              </v-card-actions>
            </v-card>

            <!-- Snackbar -->
            <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
              {{ snackbar.text }}
            </v-snackbar>
          </v-container>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import LoginSidebar from '@/components/LoginSidebar.vue'

export default {
  name: 'LoginPage',

  components: {
    LoginSidebar
  },
  
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },

  computed: {
    ...mapState(['loading', 'snackbar']),
    ...mapGetters(['isAuthenticated', 'currentUser'])
  },

  methods: {
    ...mapActions(['login', 'logout', 'showMessage']),

    async handleLogin() {
      try {
        await this.login(this.credentials)
      } catch (error) {
        console.error('Login failed:', error)
      }
    },

    async handleLogout() {
      await this.logout()
    }
  }
}
</script>

<style lang="scss">
@use '@/styles/loginkiosk.scss';
</style>

