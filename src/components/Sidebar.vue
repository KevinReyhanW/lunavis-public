<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    class="sidebar"
  >
    <!-- Logo -->
    <v-list-item class="logo-container">
      <v-img :src="require('@/assets/lunavislogo.png')" class="logo-sidebar" contain />
    </v-list-item>

    <v-divider></v-divider>

    <!-- Menu Utama -->
    <v-list dense nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          link
          exact
          active-class="active-link"
          class = "menu-item"
        >
          <v-list-item-icon class="menu-icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "AppSidebar",
  data: () => ({
    drawer: true,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard"},
      { title: "Permintaan Kunjungan", icon: "mdi-clipboard-account", to: "/permintaankunjungan" },
      { title: "Laporan", icon: "mdi-file-document", to: "/laporan" },
    ],
  }),
};
</script>

<style lang="scss">
@use '../styles/sidebar.scss';
</style>

