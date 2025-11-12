<template>
  <v-container fluid>
    <AppSidebar />
    <h1 class="mb-4">Dashboard</h1>

    <!-- Card Ringkasan -->
    <v-row class="stats-row">
        <v-col cols="12" md="4">
          <v-card class="stat-card stat-card-green">
            <div class="stat-card-content">
              <div class="stat-icon-wrapper stat-icon-green">
                <v-icon color="white" size="24">mdi-check-circle</v-icon>
              </div>
              <div>
                <div class="stat-number">2</div>
                <div class="stat-label">Checkin</div>
              </div>
            </div>
          </v-card>
        </v-col>

      <v-col cols="12" md="4">
          <v-card class="stat-card stat-card-red">
            <div class="stat-card-content">
              <div class="stat-icon-wrapper stat-icon-red">
                <v-icon color="white" size="24">mdi-close-circle</v-icon>
              </div>
              <div>
                <div class="stat-number">2</div>
                <div class="stat-label">Tidak Checkout</div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="stat-card stat-card-orange">
            <div class="stat-card-content">
              <div class="stat-icon-wrapper stat-icon-orange">
                <v-icon color="white" size="24">mdi-package-variant</v-icon>
              </div>
              <div>
                <div class="stat-number">2</div>
                <div class="stat-label">Barang Ditemukan</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

    <!-- Tabel Data Terbaru -->
    <v-card class="mt-6">
      <v-card-title>Daftar Tamu Terbaru</v-card-title>
      <v-data-table
        :headers="headers"
        :items="guests"
        class="elevation-1"
      ></v-data-table>
    </v-card>
    <!-- footer in-flow: akan menempel di bawah dan berada di kiri -->
    <AppFooter class="page-footer" />
  </v-container>
</template>

<script>

import AppSidebar from '@/components/Sidebar.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  name: "DashboardReceptionist",

  components: {
    AppSidebar,
    AppFooter
  },

  data: () => ({
    headers: [
      { text: "Nama Pengunjung", value: "name" },
      { text: "Kategori", value: "category" },
      { text: "Tanggal", value: "date" },
    ],
    guests: [
      { name: "Andi", category: "Pengunjung", date: "2025-08-25" },
      { name: "Budi", category: "Non Pegawai", date: "2025-08-26" },
    ],
  }),
};
</script>

<style lang="scss">
@use '../styles/dashboard.scss';
</style>

