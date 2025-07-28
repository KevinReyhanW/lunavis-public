
<template>
  <v-container
    fill-height
    fluid
    class="login-page"
  >
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-6 rounded-xl" elevation="10">
          <v-img src="@/assets/logolunavis.png" max-height="100" contain class="mb-4" />
          <h3 class="text-center mb-4 font-weight-bold">Visitor Management System</h3>
          <v-form>
            <v-text-field
              label="Email / Username"
              prepend-inner-icon="mdi-email"
              outlined
              dense
              class="mb-3"
            ></v-text-field>
            <v-text-field
              label="Password"
              prepend-inner-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              outlined
              dense
              class="mb-4"
            ></v-text-field>
            <v-btn color="orange darken-2" block class="white--text">Login</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false
    };
  }
};
</script>

<style scoped>
.login-page {
  background: url('@/assets/loginbackground.png') no-repeat center;
  background-size: cover;
  min-height: 150vh;
}
</style>

