<template>
  <v-container fluid>
    <AppSidebar />
    <h1 class="mb-4">Dashboard</h1>

    <!-- Card Ringkasan -->
    <v-row>
      <v-col cols="12" md="6" lg="3">
        <v-card class="pa-4 summary-card">
          <v-icon large class="mb-2">mdi-account-group</v-icon>
          <div class="title">120</div>
          <div class="caption">Total Tamu</div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="3">
        <v-card class="pa-4 summary-card">
          <v-icon large class="mb-2">mdi-cash-multiple</v-icon>
          <div class="title">58</div>
          <div class="caption">Transaksi</div>
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
      { text: "Nama", value: "name" },
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


