# Sistem Pakar Rekomendasi Wisata Lombok

## 1. Deskripsi Proyek
Sistem Pakar Rekomendasi Wisata Lombok adalah aplikasi berbasis web yang membantu pengguna menemukan destinasi wisata di Lombok berdasarkan preferensi pribadi menggunakan pendekatan pohon keputusan.

## 2. Struktur File
```
sistem-pakar-wisata-lombok/
├── README.md           # Dokumentasi proyek
├── index.html         # Halaman utama aplikasi
├── styles.css         # Gaya tampilan
├── script.js          # Logika interaksi pengguna
└── pohon_keputusan.js # Pohon keputusan dan logika sistem pakar
└── image/             # Direktori penyimpanan gambar
```

## 3. Fitur Utama
- Antarmuka pengguna yang interaktif dan responsif
- Sistem rekomendasi berbasis pohon keputusan
- Navigasi pertanyaan yang dinamis
- Tampilan rekomendasi dengan gambar
- Opsi untuk memulai kembali pencarian

## 4. Cara Penggunaan

### Instalasi
1. Clone repositori
2. Buka file `index.html`

### Alur Penggunaan
1. Buka aplikasi di browser
2. Jawab pertanyaan yang muncul
3. Ikuti alur pertanyaan hingga mendapatkan rekomendasi
4. Lihat rekomendasi destinasi wisata
5. Klik "Cari Destinasi Lain" untuk memulai ulang

### Bisa juga dibuka di 
[Rekomendasi Wisata Lombok](sistempakarkelompokAI.surge.sh)

## 5. Teknologi yang Digunakan
- HTML5
- CSS3
- JavaScript

## 6. Tim Pengembang
- Kelompok Kecerdasan Buatan 2025
    - Ahmad Muslihul Khair (F1D02310001)
    - Anggiri Dahlia Candra (F1D02310038)
    - Karina Septia Suwandi (F1D02310066)
    - Nur Adinda Juniarti (F1D02310129)
    - Umam Alfarizi (F1D02310141)

## 7. Penjelasan Pohon Keputusan

### 7.1 Struktur Dasar
Pohon keputusan dalam sistem ini diimplementasikan menggunakan objek JavaScript yang terdiri dari node-node keputusan dan rekomendasi. Setiap node memiliki struktur sebagai berikut:

```javascript
{
  pertanyaan: "Teks pertanyaan yang ditampilkan ke pengguna",
  pilihan: [
    { 
      jawaban: "Pilihan jawaban", 
      nodeBerikutnya: "ID_NODE_BERIKUTNYA" 
    }
  ]
}
{
  rekomendasi: "Teks rekomendasi yang ditampilkan",
  image: "path/ke/gambar.jpg"
}
```

### 7.2 Alur Keputusan
1. **Node Awal (P1)**: Meminta pengguna memilih jenis wisata yang diinginkan
   - Wisata Alam (P2)
   - Wisata Budaya & Sejarah (P3)
   - Wisata Hiburan & Rekreasi (P4)
   - Wisata Belanja (P5)
   - Wisata Kuliner (P6)
   - Wisata Gili (P7)

2. **Setiap cabang** akan mengajukan pertanyaan lebih spesifik untuk mempersempit pilihan rekomendasi

3. **Node Akhir (R_*)**: Memberikan rekomendasi destinasi wisata beserta gambar

### 7.3 Contoh Alur
Contoh alur untuk wisata pantai:
1. P1: Pilih "Wisata Alam" → P2
2. P2: Pilih "Wisata Pantai" → P21
3. P21: Pilih "Memiliki Pasir Berwarna Putih" → P21a
4. P21a: Pilih "Snorkeling, Menyelam, atau Bersantai" → P21a1
5. P21a1: Pilih "Pemandangan Laut & Sunset Romantis" → R_SENGGIGI

### 7.4 Node Rekomendasi
Setiap node rekomendasi (dimulai dengan R_) akan menampilkan:
- Nama destinasi wisata
- Deskripsi singkat
- Gambar destinasi

## 8. Referensi
- Hidayatullah, Z., Anwariyah, K., Sa'adati, Y., & Syuhada, F. (2022). Sistem Pakar Dengan Metode Decision Tree Untuk Rekomendasi Wisata Di Kabupaten Lombok Timur. SainsTech Innovation Journal, 5(2), 219-227.
