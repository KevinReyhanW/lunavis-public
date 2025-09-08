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
      <v-list-group prepend-icon="mdi-menu" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Menu Utama</v-list-item-title>
          </v-list-item-content>
        </template>

        <!-- Submenu -->
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          link
          exact
          active-class="active-link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    drawer: true,
    items: [
      { title: "Daftar Pemantauan Tamu", icon: "mdi-monitor", to: "/pemantauan" },
      { title: "Data Transaksi", icon: "mdi-cash-multiple", to: "/transaksi" },
    ],
  }),
};
</script>

<style lang="scss">
@use '@/styles/sidebar.scss';
</style>

