<template>
  <aside class = "sidebar">
    <v-layout column fill-height>

      <div class ="logo-wrapper">
        <v-img :src="require('@/assets/lunavislogo.png')" class="logo-image" contain />
      </div>

      <!-- Spacer setelah teks -->
      <v-spacer></v-spacer>

      <div class="center-wrapper">
        <div class="title">
          <h2>Enterprise</h2>
          <h2><span class="highlight">Visitor</span></h2>
          <h2>Management</h2>
          <h2>System</h2>
        </div>
      </div>

      <!-- Spacer -->
      <v-spacer></v-spacer>

      <v-img
        :src="require('@/assets/cornerdecor.png')"
        max-width = 200px
        max-height= 190px
        class="bottom-decor"
      ></v-img>
    </v-layout>
  </aside>
</template>

<script>
export default {
  name: 'LoginSidebar',
};
</script>

<style lang="scss">
@use '@/styles/sidebar.scss';
</style>
