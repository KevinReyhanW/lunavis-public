<template>
  <div class="login-page"
  :style="{
    backgroundImage: `url(${require('@/assets/background2.png')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100vw'
    }"
  >
  
  <v-container 
    class="login-page fill-height d-flex align-center justify-center" 
    style="background: transparent; min-height: 100vh;"
  >
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        
        <!-- Loading indicator -->
        <v-overlay :value="loading">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <!-- Login form field -->
        <v-card v-if="!isAuthenticated" class="pa-4" 
          :style = "{
            backgroundColor :'#06155A', 
            color: 'white', 
            borderRadius :'10px'
            }" 
          >
        <v-img :src="require('@/assets/lunavislogo.png')" max-height="100" contain class="mb-4" />
          <v-card-title class="font-weight-bold">Visitor Management System</v-card-title>
          <v-card-text>

            <v-form @submit.prevent="handleLogin">

              <v-text-field
                v-model="credentials.email"
                density="compact"
                label="Email"
                type="email"
                prepend-inner-icon="mdi-email-outline"
                filled
                class= "white-filled mb-4"
              />

              <v-text-field
                v-model="credentials.password"
                density="compact"
                label="Password"
                type="password"
                prepend-inner-icon="mdi-key-outline"
                filled
                class= "white-filled"
              />
              <v-btn 
              type="submit" 
              style="background-color: #F4941C; color: white; width: 150px; height: 50px; borderRadius: 8px; font-size: 20px;"
              class="mx-auto d-block"
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

<style>
.white-filled .v-field__overlay,
.white-filled .v-input__control,


.white-filled .v-field {
  background-color: #fff !important;
  border-radius: 10px !important;
  margin-bottom: 16px;
}

.white-filled input,
.white-filled .v-label {
  color: #06155A !important; /* dark blue text for contrast */
}

.white-filled .v-icon {
  color: #06155A !important;
}

.white-filled .v-field__line {
  background-color: transparent !important;
}
</style>

