# Vuetify Lunavis

Aplikasi Vue.js dengan Vuetify UI Framework.

## Struktur Folder

### `/src`
Folder utama yang berisi seluruh kode sumber aplikasi.

### `/src/assets`
Folder yang menyimpan aset statis seperti:
- Gambar
- Font
- File statis lainnya

### `/src/components`
Folder yang berisi komponen Vue yang dapat digunakan kembali (reusable components).
Komponen-komponen ini bersifat umum dan dapat dipakai di berbagai halaman.

### `/src/constants`
Folder untuk menyimpan nilai-nilai konstanta yang digunakan di seluruh aplikasi.
Contoh: konfigurasi API, daftar menu, dsb.

### `/src/layouts`
Folder yang berisi template tata letak (layout) yang digunakan aplikasi.
- Mengatur struktur tampilan umum
- Bisa berisi navigasi, footer, sidebar, dsb.

### `/src/pages`
Folder yang berisi komponen halaman utama aplikasi.
Setiap file di sini mewakili satu halaman/rute dalam aplikasi.
Contoh:
- `Home.vue`: Halaman beranda
- `Login.vue`: Halaman login

### `/src/plugins`
Folder untuk konfigurasi plugin Vue.js.
Contoh:
- `vuetify.js`: Konfigurasi Vuetify UI Framework

### `/src/router`
Folder yang mengatur routing aplikasi.
- `index.js`: Mendefinisikan rute-rute yang tersedia
- Mengatur navigasi antar halaman

### `/src/services`
Folder yang berisi layanan untuk berkomunikasi dengan API.
- Berisi fungsi-fungsi untuk mengakses backend
- Menangani request/response HTTP

### `/src/store`
Folder yang berisi manajemen state aplikasi menggunakan Vuex.
- `index.js`: Konfigurasi utama Vuex store
- `actions.js`: Aksi-aksi untuk mengubah state
- `mutations.js`: Fungsi untuk memodifikasi state
- `getters.js`: Fungsi untuk mengambil data dari state
- `state.js`: State/data aplikasi
- `/modules`: Modul Vuex terpisah untuk fitur berbeda

### `/src/utils`
Folder yang berisi fungsi-fungsi pembantu (utility/helper).
- Fungsi yang sering digunakan
- Fungsi format data
- Validasi
- dsb.

## Cara Menjalankan Aplikasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan aplikasi dalam mode development:
```bash
npm run serve
```

3. Build untuk production:
```bash
npm run build
```


