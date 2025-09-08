<template>
  <v-container fluid>
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
  </v-container>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'

export default {
  name: "Dashboard",

  components: {
    Sidebar
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

<style scoped>
.summary-card {
  text-align: center;
  background: #1e3a8a;
  color: white;
  border-radius: 0.75rem;
}
</style>
