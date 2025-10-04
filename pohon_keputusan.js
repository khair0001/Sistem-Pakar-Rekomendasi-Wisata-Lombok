const pohonKeputusan = {
  P1: {
    pertanyaan: "Pilih Jenis Wisata Yang Disukai",
    pilihan: [
      { jawaban: "Wisata Alam", nodeBerikutnya: "P2" },
      { jawaban: "Wisata Budaya & Sejarah", nodeBerikutnya: "P3" },
      { jawaban: "Wisata Hiburan & Rekreasi", nodeBerikutnya: "P4" },
      { jawaban: "Wisata Belanja", nodeBerikutnya: "P5" },
      { jawaban: "Wisata Kuliner", nodeBerikutnya: "P6" },
      { jawaban: "Wisata Gili (Pulau Kecil)", nodeBerikutnya: "P7" },
    ],
  },
  // --- Wisata Alam ---
  P2: {
    pertanyaan: "Pilihan Wisata Alam",
    pilihan: [
      { jawaban: "Wisata Pantai", nodeBerikutnya: "P21" },
      { jawaban: "Air Terjun", nodeBerikutnya: "P23" },
      { jawaban: "Gunung dan Bukit", nodeBerikutnya: "P24" },
    ],
  },
  P21: {
    pertanyaan: "Pilih Jenis Pasir Pantai",
    pilihan: [
      { jawaban: "Memiliki Pasir Berwarna Putih", nodeBerikutnya: "P21a" },
      { jawaban: "Memiliki Pasir Berwarna Hitam", nodeBerikutnya: "P21b" },
      {
        jawaban: "Memiliki Pasir Berwarna Pink/Merah Muda",
        nodeBerikutnya: "R_P_PINK",
      },
      {
        jawaban: "Tidak Memiliki Pasir Atau Garis Pantai",
        nodeBerikutnya: "R_P_TANJUNG_MENANGIS",
      },
      { jawaban: "Pasir putih dan Air Jernih", nodeBerikutnya: "P21c" },
      { jawaban: "Pasir Merica", nodeBerikutnya: "P21d" },
    ],
  },
  P21a: {
    pertanyaan: "Pilih Aktivitas yang Disukai",
    pilihan: [
      {
        jawaban: "Snorkeling, Menyelam, atau Bersantai",
        nodeBerikutnya: "P21a1",
      },
      { jawaban: "Surfing Atau Berselancar", nodeBerikutnya: "P21a2" },
      {
        jawaban: "Menikmati Pemandangan dan Bersantai",
        nodeBerikutnya: "P21a3",
      },
    ],
  },
  P21a1: {
    pertanyaan: "Bagaimana Pemandangan yang Anda Suka?",
    pilihan: [
      {
        jawaban: "Pemandangan Laut & Sunset Romantis",
        nodeBerikutnya: "R_SENGGIGI",
      },
      {
        jawaban: "Pemandangan Karang Kristal yang Unik",
        nodeBerikutnya: "R_SEMETI",
      },
      {
        jawaban: "Garis Pantai Panjang & Air Tenang",
        nodeBerikutnya: "R_SELONG_BELANAK",
      },
      {
        jawaban: "Suasana Tenang dengan Pemandangan Bukit",
        nodeBerikutnya: "P21a1_a",
      },
    ],
  },
  P21a1_a: {
    pertanyaan: "Apakah Anda Suka Mendaki Bukit untuk Pemandangan Terbaik?",
    pilihan: [
      {
        jawaban: "Ya, saya suka pemandangan dari atas bukit",
        nodeBerikutnya: "R_MERESE",
      },
      {
        jawaban: "Tidak, saya lebih suka di tepi pantai saja",
        nodeBerikutnya: "R_TANJUNG_AAN",
      },
    ],
  },
  P21a2: {
    pertanyaan: "Pilih jenis ombak yang Anda cari",
    pilihan: [
      { jawaban: "Ombak untuk Pemula", nodeBerikutnya: "R_KUTA_MANDALIKA" },
      { jawaban: "Ombak untuk Pemula hingga Mahir", nodeBerikutnya: "R_MAWI" },
      { jawaban: "Ombak untuk Profesional", nodeBerikutnya: "R_GERUPUK" },
    ],
  },
  P21a3: {
    pertanyaan: "Apakah Anda suka pantai yang ada perahunya?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_SIRA" },
      { jawaban: "Tidak", nodeBerikutnya: "P21a3_a" },
    ],
  },
  P21a3_a: {
    pertanyaan: "Apakah Anda ingin melihat matahari terbenam?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_TANJUNG_BIAS" },
      { jawaban: "Tidak", nodeBerikutnya: "R_LANTAN" },
    ],
  },
  P21b: {
    pertanyaan: "Apakah Anda suka surfing?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_TANJUNG_POKI" },
      { jawaban: "Tidak", nodeBerikutnya: "R_LABUAN_HAJI" },
    ],
  },
  P21c: {
    pertanyaan: "Apakah Anda suka pantai dengan terumbu karang yang indah?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_SEKOTONG" },
      { jawaban: "Tidak", nodeBerikutnya: "R_AMPENAN" },
    ],
  },
  P21d: {
    pertanyaan: "Apakah Anda suka pantai yang dikelilingi tebing?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_PENYISOK" },
      { jawaban: "Tidak", nodeBerikutnya: "R_CEMARE" },
    ],
  },
  P22: {
    pertanyaan: "Apakah Anda suka kolam renang dengan pemandangan alam?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_JOBEN" },
      { jawaban: "Tidak", nodeBerikutnya: "P22b" },
    ],
  },
  P22b: {
    pertanyaan: "Apakah Anda lebih suka waterpark atau kolam biasa?",
    pilihan: [
      {
        jawaban: "Waterpark dengan banyak wahana",
        nodeBerikutnya: "R_WATERPARK_RINJANI",
      },
      { jawaban: "Kolam renang biasa", nodeBerikutnya: "P22c" },
    ],
  },
  P22c: {
    pertanyaan: "Pilih lokasi kolam renang yang Anda suka?",
    pilihan: [
      {
        jawaban: "Kolam yang cocok untuk keluarga",
        nodeBerikutnya: "R_LONGTUN",
      },
      { jawaban: "Kolam dengan suasana tenang", nodeBerikutnya: "R_PENGEMPOK" },
      { jawaban: "Kolam yang luas", nodeBerikutnya: "R_JOBONG" },
    ],
  },
  P23: {
    pertanyaan: "Pilih Ketinggian Air Terjun",
    pilihan: [
      {
        jawaban: "Ketinggian 0-10 Meter (relatif rendah)",
        nodeBerikutnya: "P23a",
      },
      { jawaban: "Ketinggian 11-35 Meter (menengah)", nodeBerikutnya: "P23b" },
      { jawaban: "Ketinggian 36-60 Meter (tinggi)", nodeBerikutnya: "P23c" },
      {
        jawaban: "Air Terjun dengan Kolam yang Jernih",
        nodeBerikutnya: "P23d",
      },
      { jawaban: "Air Terjun Bertingkat", nodeBerikutnya: "R_SENDANG_GILE" },
    ],
  },
  P23a: {
    pertanyaan: "Bagaimana akses menuju air terjun yang Anda suka?",
    pilihan: [
      {
        jawaban: "Akses mudah, dekat jalan raya",
        nodeBerikutnya: "R_OTAK_KOKOQ",
      },
      { jawaban: "Akses butuh sedikit trekking", nodeBerikutnya: "P23a_a" },
    ],
  },
  P23a_a: {
    pertanyaan: "Apakah Anda suka air terjun yang tersembunyi?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_MANGKU_KODEK" },
      { jawaban: "Tidak", nodeBerikutnya: "R_SARANG_WALET" },
    ],
  },
  P23b: {
    pertanyaan: "Apakah Anda ingin air terjun dengan pemandangan pegunungan?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_TIBU_BUNTER" },
      { jawaban: "Tidak", nodeBerikutnya: "R_JERUK_MANIS" },
    ],
  },
  P23c: {
    pertanyaan: "Apakah Anda ingin air terjun yang dekat dengan Rinjani?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "P23c_a" },
      { jawaban: "Tidak", nodeBerikutnya: "R_KALIAGE" },
    ],
  },
  P23c_a: {
    pertanyaan: "Apakah Anda ingin air terjun yang airnya berwarna?",
    pilihan: [
      { jawaban: "Ya, Air kehijauan", nodeBerikutnya: "R_MANGKU_SAKTI" },
      {
        jawaban: "Tidak, saya suka air jernih biasa",
        nodeBerikutnya: "R_SEMPORENAN",
      },
    ],
  },
  P23d: {
    pertanyaan: "Pilih suasana air terjun yang Anda inginkan?",
    pilihan: [
      { jawaban: "Suasana sejuk dan asri", nodeBerikutnya: "R_BENANG_STOKEL" },
      { jawaban: "Suasana tenang dan damai", nodeBerikutnya: "R_TIU_KELEP" },
      { jawaban: "Suasana yang romantis", nodeBerikutnya: "R_BENANG_KELAMBU" },
    ],
  },
  // P23e: {
  //   pertanyaan: "Apakah Anda suka air terjun dengan kolam alami?",
  //   pilihan: [
  //     { jawaban: "Ya", nodeBerikutnya: "R_SENDANG_GILE" },
  //     { jawaban: "Tidak", nodeBerikutnya: "R_TIBU_IKEL" },
  //   ],
  // },
  P24: {
    pertanyaan: "Pilih Jenis Dataran Tinggi",
    pilihan: [
      { jawaban: "Gunung", nodeBerikutnya: "R_RINJANI" },
      { jawaban: "Bukit", nodeBerikutnya: "P24a" },
    ],
  },
  P24a: {
    pertanyaan: "Pilih Ketinggian Bukit (MDPL)",
    pilihan: [
      { jawaban: "Ketinggian Dari 1000 - 1500 MDPL", nodeBerikutnya: "P24b" },
      { jawaban: "Ketinggian Dari 1600 - 2000 MDPL", nodeBerikutnya: "P24c" },
      { jawaban: "Ketinggian Dari 2100 - 2500 MDPL", nodeBerikutnya: "P24d" },
    ],
  },
  P24b: {
    pertanyaan: "Pilih pemandangan bukit",
    pilihan: [
      { jawaban: "Pemandangan Savana", nodeBerikutnya: "R_SAVANA_DANDAUN" },
      {
        jawaban: "Pemandangan Perbukitan dan Pedesaan",
        nodeBerikutnya: "R_SELONG",
      },
      { jawaban: "Pemandangan Pantai dan Lautan", nodeBerikutnya: "R_MALIMBU" },
      {
        jawaban: "Pemandangan Hutan Tropis dan Laut",
        nodeBerikutnya: "R_GUNUNG_TUNAK",
      },
    ],
  },
  P24c: {
    pertanyaan: "Pilih karakteristik pendakian",
    pilihan: [
      { jawaban: "Pendakian untuk pemula", nodeBerikutnya: "R_PERGASINGAN" },
      {
        jawaban: "Pendakian yang lumayan menantang",
        nodeBerikutnya: "R_ANAK_DARA",
      },
      {
        jawaban: "Pemandangan pertanian yang indah",
        nodeBerikutnya: "R_SELONG",
      },
    ],
  },
  P24d: {
    pertanyaan: "Apakah Anda ingin mendaki ke Bukit Nanggi?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_NANGGI" },
      { jawaban: "Tidak", nodeBerikutnya: "P24e" },
    ],
  },
  P24e: {
    pertanyaan: "Apakah Anda ingin mendaki ke Bukit Pal Jepang?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_PAL_JEPANG" },
      { jawaban: "Tidak", nodeBerikutnya: "R_LEMBAH_GEDONG" },
    ],
  },
  // --- Wisata Budaya & Sejarah ---
  P3: {
    pertanyaan: "Pilih Jenis Wisata Budaya",
    pilihan: [
      { jawaban: "Desa Adat Suku Sasak", nodeBerikutnya: "P3a" },
      { jawaban: "Kerajinan dan Seni Tradisional", nodeBerikutnya: "P3b" },
      { jawaban: "Situs Sejarah dan Pura", nodeBerikutnya: "P3c" },
      { jawaban: "Kehidupan Pedesaan & Agrowisata", nodeBerikutnya: "P3d" },
    ],
  },
  P3a: {
    pertanyaan: "Pilih desa adat yang ingin dikunjungi",
    pilihan: [
      { jawaban: "Desa Sade", nodeBerikutnya: "R_DESA_SADE" },
      { jawaban: "Desa Bayan", nodeBerikutnya: "R_DESA_BAYAN" },
      { jawaban: "Desa Sembalun", nodeBerikutnya: "R_DESA_SEMBALUN" },
      { jawaban: "Dusun Belek Sembalun", nodeBerikutnya: "R_DUSUN_BELEK" },
    ],
  },
  P3b: {
    pertanyaan: "Pilih jenis kerajinan",
    pilihan: [
      { jawaban: "Sentra Kerajinan Tenun", nodeBerikutnya: "R_SUKARARA" },
      { jawaban: "Sentra Kerajinan Gerabah", nodeBerikutnya: "R_BANYUMULEK" },
    ],
  },
  P3c: {
    pertanyaan: "Pilih situs yang ingin dikunjungi",
    pilihan: [
      { jawaban: "Pura bersejarah", nodeBerikutnya: "R_PURA_LINGSAR" },
      { jawaban: "Pura dengan taman", nodeBerikutnya: "R_TAMAN_NARMADA" },
      {
        jawaban: "Kota Tua Peninggalan Belanda",
        nodeBerikutnya: "R_KOTA_TUA_AMPENAN",
      },
    ],
  },
  P3d: {
    pertanyaan: "Pilih suasana pedesaan yang Anda suka",
    pilihan: [
      { jawaban: "Pedesaan organik dan bersih", nodeBerikutnya: "R_BILEBANTE" },
      { jawaban: "Pedesaan di lereng gunung", nodeBerikutnya: "R_TETEBATU" },
    ],
  },
  // --- Wisata Hiburan dan Rekreasi ---
  P4: {
    pertanyaan: "Pilih jenis rekreasi yang Anda suka",
    pilihan: [
      { jawaban: "Di tempat yang sejuk/dataran tinggi", nodeBerikutnya: "P4a" },
      { jawaban: "Di tempat dengan pemandangan alam", nodeBerikutnya: "P4b" },
      { jawaban: "Di tempat bermain/edukasi", nodeBerikutnya: "P4c" },
      { jawaban: "Kolam Renang / Waterpark", nodeBerikutnya: "P22" },
    ],
  },
  P4a: {
    pertanyaan: "Pilih pemandangan yang Anda inginkan",
    pilihan: [
      {
        jawaban: "Pemandangan Perbukitan Hijau",
        nodeBerikutnya: "R_PUSUK_SEMBALUN",
      },
      {
        jawaban: "Pemandangan Hamparan Sawah",
        nodeBerikutnya: "R_TETEBATU_REKREASI",
      },
    ],
  },
  P4b: {
    pertanyaan: "Apakah Anda tertarik dengan wisata persawahan?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_TETEBATU_REKREASI" },
      { jawaban: "Tidak", nodeBerikutnya: "P4b_a" },
    ],
  },
  P4b_a: {
    pertanyaan: "Apakah Anda tertarik dengan wisata pohon purba?",
    pilihan: [
      { jawaban: "Ya", nodeBerikutnya: "R_POHON_PURBA" },
      { jawaban: "Tidak", nodeBerikutnya: "R_BENDUNGAN_PANDAN_DURE" },
    ],
  },
  P4c: {
    pertanyaan: "Pilih tempat bermain",
    pilihan: [
      { jawaban: "Taman satwa", nodeBerikutnya: "R_LOMBOK_WILDLIFE" },
      {
        jawaban: "Wahana bermain modern",
        nodeBerikutnya: "R_TRANS_STUDIO_MINI",
      },
    ],
  },
  // --- Wisata Belanja ---
  P5: {
    pertanyaan: "Pilih Jenis Tempat Belanja",
    pilihan: [
      {
        jawaban: "Pusat Perdagangan/Mall",
        nodeBerikutnya: "R_PANCOR_TRADE_CENTER",
      },
      { jawaban: "Toko Oleh-oleh", nodeBerikutnya: "P5a" },
      {
        jawaban: "Pusat Busana (Fashion Outlet)",
        nodeBerikutnya: "R_TOP_FASHION_OUTLET",
      },
    ],
  },
  P5a: {
    pertanyaan: "Pilih toko yang ingin dikunjungi",
    pilihan: [
      { jawaban: "Toko Oleh-oleh Lengkap", nodeBerikutnya: "R_SASAKU" },
      { jawaban: "Toko Oleh-oleh Khas", nodeBerikutnya: "R_GANDRUNG" },
    ],
  },
  // --- Wisata Kuliner ---
  P6: {
    pertanyaan: "Pilih Jenis Tempat Kuliner",
    pilihan: [
      { jawaban: "Lesehan", nodeBerikutnya: "P6a" },
      { jawaban: "Restoran/Rumah Makan", nodeBerikutnya: "P6b" },
      { jawaban: "Kuliner Khas & Tradisional", nodeBerikutnya: "P6c" },
    ],
  },
  P6a: {
    pertanyaan: "Pilih suasana lesehan",
    pilihan: [
      { jawaban: "Suasana tepi sawah", nodeBerikutnya: "R_LESEHAN_BAMBU" },
      {
        jawaban: "Suasana nyaman untuk keluarga",
        nodeBerikutnya: "R_LESEHAN_GADING",
      },
    ],
  },
  P6b: {
    pertanyaan: "Pilih jenis makanan",
    pilihan: [
      { jawaban: "Masakan Khas Lombok", nodeBerikutnya: "P6b_a" },
      { jawaban: "Masakan Nusantara", nodeBerikutnya: "R_KANIA_RESTAURANT" },
      { jawaban: "Masakan Internasional", nodeBerikutnya: "R_ROEMAH_LANGKO" },
    ],
  },
  P6b_a: {
    pertanyaan: "Pilih jenis masakan khas",
    pilihan: [
      { jawaban: "Ayam Taliwang", nodeBerikutnya: "R_AYAM_TALIWANG_IRAMA" },
      { jawaban: "Sate Rembiga", nodeBerikutnya: "R_SATE_REMBIGA_UTAMA" },
      { jawaban: "Nasi Balap Puyung", nodeBerikutnya: "R_NASI_BALAP_PUYUNG" },
    ],
  },
  P6c: {
    pertanyaan: "Pilih jajanan atau masakan khas?",
    pilihan: [
      {
        jawaban: "Jajanan Temberodok Sakra",
        nodeBerikutnya: "R_TEMBERODOK_SAKRA",
      },
      { jawaban: "Sate Tanjung", nodeBerikutnya: "R_SATE_TANJUNG" },
    ],
  },
  // --- Wisata Gili ---
  P7: {
    pertanyaan: "Pilih jenis suasana Gili yang Anda inginkan",
    pilihan: [
      {
        jawaban: "Ramai, banyak aktivitas dan hiburan",
        nodeBerikutnya: "R_GILI_TRAWANGAN",
      },
      { jawaban: "Tenang, cocok untuk relaksasi", nodeBerikutnya: "P7a" },
      { jawaban: "Unik dan terpencil", nodeBerikutnya: "P7b" },
    ],
  },
  P7a: {
    pertanyaan: "Pilih Gili dengan pemandangan",
    pilihan: [
      {
        jawaban: "Pemandangan pantai berpasir putih",
        nodeBerikutnya: "R_GILI_AIR",
      },
      { jawaban: "Suasana paling tenang", nodeBerikutnya: "R_GILI_MENO" },
    ],
  },
  P7b: {
    pertanyaan: "Pilih Gili unik yang ingin Anda kunjungi",
    pilihan: [
      { jawaban: "Taman Bawah Laut", nodeBerikutnya: "R_GILI_SULAT" },
      { jawaban: "Spot foto Instagramable", nodeBerikutnya: "R_GILI_KEDIS" },
      { jawaban: "Taman karang yang indah", nodeBerikutnya: "R_GILI_NANGGU" },
    ],
  },
  // --- Rekomendasi (ratusan node) ---
  R_P_PINK: {
    rekomendasi: 
      "Anda Sebaiknya Mengunjungi Pantai Tangsi (Pink Beach)",
    image:
      "image/pink_beach.jpg",
  },
R_P_TANJUNG_MENANGIS: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Ketapang atau Pantai Tanjung Menangis",
    image:
      "image/pantai_tanjung_menangis.jpg",
  },
  R_SENGGIGI: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Senggigi",
    image:
      "image/pantai_senggigi.jpg",
  },
  R_SEMETI: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Semeti",
    image:
      "image/pantai_semeti.jpeg",
  },
  R_SELONG_BELANAK: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Selong Belanak",
    image:
      "image/pantai_selong_belanak.jpg",
  },
  R_MERESE: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Bukit Merese",
    image:
      "image/bukit_merese.jpg",
  },
  R_TANJUNG_AAN: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Tanjung Aan",
    image:
      "image/pantai_tanjung_aan.jpg",
  },
  R_KUTA_MANDALIKA: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Kuta Mandalika",
    image:
      "image/pantai_kuta_mandalika.jpg",
  },
  R_MAWI: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Mawi",
    image:
      "image/pantai_mawi.jpg",
  },
  R_GERUPUK: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Gerupuk",
    image:
      "image/pantai_gerupuk.jpg",
  },
  R_SIRA: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Sira",
    image:
      "image/pantai_sira.jpg",
  },
  R_TANJUNG_BIAS: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Tanjung Bias",
    image:
      "image/pantai_tanjung_bias.jpg",
  },
  R_LANTAN: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Lantan",
    image:
      "image/pantai_lantan.jpg",
  },
  R_TANJUNG_POKI: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Tanjung Poki",
    image:
      "image/tanjung_poki.jpg",
  },
  R_LABUAN_HAJI: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Labuan Haji",
    image:
      "image/pantai_labuan_haji.jpeg",
  },
  R_SEKOTONG: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Sekotong",
    image:
      "image/pantai_sekotong.jpeg",
  },
  R_AMPENAN: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Ampenan",
    image:
      "image/pantai_ampenan.jpeg",
  },
  R_PENYISOK: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Penyisok",
    image:
      "image/pantai_penyisok.jpeg",
  },
  R_CEMARE: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pantai Cemare",
    image:
      "image/pantai_cemare.jpg",
  },
  R_JOBEN: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Kolam Renang Joben",
    image:
      "image/kolam_renang_joben.jpg",
  },
  R_WATERPARK_RINJANI: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Kolam Renang Waterpark Rinjani",
    image:
      "image/waterpark_rinjani.jpg",
  },
  R_LONGTUN: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Kolam Renang Longtun",
    image:
      "image/kolam_renang_longtun.jpeg",
  },
  R_PENGEMPOK: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Kolam Renang Pengempok",
    image:
      "image/kolam_renang_pengempok.jpeg",
  },
  R_JOBONG: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Wisata Kolam Renang Jobong",
    image:
      "image/kolam_renang_jobong.jpeg",
  },
  R_OTAK_KOKOQ: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Otak Kokoq",
    image:
      "image/air_terjun_otak_kokoq.jpg",
  },
  R_MANGKU_KODEK: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Mangku Kodek",
    image:
      "image/air_terjun_mangku_kodek.jpg",
  },
  R_SARANG_WALET: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Sarang Walet",
    image:
      "image/air_terjun_sarang_walet.jpg",
  },
  R_TIBU_BUNTER: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Tibu Bunter",
    image:
      "image/air_terjun_tibu_bunter.jpg",
  },
  R_JERUK_MANIS: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Jeruk Manis",
    image:
      "image/air_terjun_jeruk_manis.jpg",
  },
  R_KALIAGE: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Kaliage",
    image:
      "image/air_terjun_kaliage.jpg",
  },
  R_MANGKU_SAKTI: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Mangku Sakti",
    image:
      "image/air_terjun_mangku_sakti.jpg",
  },
  R_SEMPORENAN: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Semporonan",
    image:
      "image/air_terjun_semporonan.jpg",
  },
  R_BENANG_STOKEL: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Benang Stokel",
    image:
      "image/air_terjun_benang_stokel.jpg",
  },
  R_TIU_KELEP: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Tiu Kelep",
    image:
      "image/air_terjun_tiu_kelep.jpg",
  },
  R_BENANG_KELAMBU: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Benang Kelambu",
    image:
      "image/air_terjun_benang_kelambu.jpg",
  },
  R_SENDANG_GILE: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Sendang Gile",
    image:
      "image/air_terjun_sendang_gile.jpg",
  },
  R_TIBU_IKEL: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Air Terjun Tibu Ikel",
    image:
      "image/air_terjun_tibu_ikel.jpg",
  },
  R_RINJANI: {
    rekomendasi:
      "Anda Sebaiknya Mendaki Ke Gunung Rinjani",
    image:
      "image/gunung_rinjani.jpg",
  },
  R_SAVANA_DANDAUN: {
    rekomendasi:
      "Anda Sebaiknya Mendaki Ke Bukit Savana Dandaun",
    image:
      "image/bukit_savana_dandaun.jpg",
  },
  R_SELONG: {
    rekomendasi:
      "Anda Sebaiknya Mendaki Ke Bukit Selong",
    image:
      "image/bukit_selong.jpg",
  },
  R_MALIMBU: {
    rekomendasi:
      "Anda Sebaiknya Mendaki Ke Bukit Malimbu",
    image:
      "image/bukit_malimbu.png",
  },
  R_GUNUNG_TUNAK: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi TWA Gunung Tunak",
    image:
      "image/twa_gunung_tunak.jpeg",
  },
  R_PERGASINGAN: {
    rekomendasi:
      "Anda Sebaiknya Mendaki Ke Bukit Pergasingan",
    image:
      "image/bukit_pergasingan.jpg",
  },
  R_ANAK_DARA: {
    rekomendasi:
      "Anda Sebaiknya Mendaki Ke Bukit Anak Dara",
    image:
      "image/bukit_anak_dara.jpg",
  },
  R_NANGGI: {
    rekomendasi:
      "Anda Sebaiknya Mendaki Ke Bukit Nanggi",
    image:
      "image/bukit_nanggi.jpg",
  },
  R_PAL_JEPANG: {
    rekomendasi:
      "Anda Sebaiknya Mendaki Ke Bukit Pal Jepang",
    image:
      "image/bukit_pal_jepang.jpg",
  },
  R_LEMBAH_GEDONG: {
    rekomendasi:
      "Anda Sebaiknya Mendaki Ke Bukit Lembah Gedong",
    image:
      "image/bukit_lembah_gedong.jpg",
  },
  R_DESA_SADE: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Desa Adat Sade",
    image:
      "image/desa_adat_sade.jpg",
  },
  R_DESA_BAYAN: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Desa Adat Bayan",
    image:
      "image/desa_adat_bayan.jpg",
  },
  R_DESA_SEMBALUN: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Desa Sembalun",
    image:
      "image/desa_sembalun.jpg",
  },
  R_DUSUN_BELEK: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Rumah Adat Dusun Belek Sembalun",
    image:
      "image/dusun_belek_sembalun.jpg",
  },
  R_SUKARARA: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Desa Sukarara (Sentra Tenun)",
    image:
      "image/desa_sukarara.jpg",
  },
  R_BANYUMULEK: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Desa Banyumulek (Sentra Gerabah)",
    image:
      "image/desa_banyumulek.jpg",
  },
  R_PURA_LINGSAR: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pura Lingsar",
    image:
      "image/pura_lingsar.png",
  },
  R_TAMAN_NARMADA: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Taman Narmada",
    image:
      "image/taman_narmada.jpg",
  },
  R_KOTA_TUA_AMPENAN: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Kota Tua Ampenan",
    image:
      "image/kota_tua_ampenan.jpg",
  },
  R_BILEBANTE: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Desa Wisata Bilebante",
    image:
      "image/desa_wisata_bilebante.jpg",
  },
  R_TETEBATU: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Wisata Tetebatu",
    image:
      "image/wisata_tetebatu.jpg",
  },
  R_PUSUK_SEMBALUN: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Wisata Pusuk Sembalun",
    image:
      "image/wisata_pusuk_sembalun.jpg",
  },
  R_TETEBATU_REKREASI: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Wisata Tetebatu",
    image:
      "image/wisata_tetebatu_rekreasi.jpg",
  },
  R_POHON_PURBA: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Wisata Pohon Purba Lian Pringgabaya",
    image:
      "image/wisata_pohon_purba.jpeg",
  },
  R_BENDUNGAN_PANDAN_DURE: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Wisata Bendungan Pandan Dure",
    image:
      "image/bendungan_pandan_dure.jpg",
  },
  R_LOMBOK_WILDLIFE: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Lombok Wildlife Park",
    image:
      "image/lombok_wildlife_park.jpeg",
  },
  R_TRANS_STUDIO_MINI: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Trans Studio Mini Mataram",
    image:
      "image/trans_studio_mini.jpg",
  },
  R_PANCOR_TRADE_CENTER: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Pancor Trade Center (PTC)",
    image:
      "image/pancor_trade_center.jpg",
  },
  R_SASAKU: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Toko Oleh-oleh SASAKU",
    image:
      "image/toko_sasaku.jpg",
  },
  R_GANDRUNG: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Toko Oleh-oleh GANDRUNG SASAK",
    image:
      "image/Gandrung_sasak.jpg",
  },
  R_TOP_FASHION_OUTLET: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi top Fashion Lombok",
    image:
      "image/top_fashion_lombok.jpg",
  },
  R_LESEHAN_BAMBU: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Lesehan Bambu Bonjeruk",
    image:
      "image/lesehan_bambu.jpeg",
  },
  R_LESEHAN_GADING: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Lesehan Gading",
    image:
      "image/lesehan_gading.jpeg",
  },
  R_KANIA_RESTAURANT: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Kania II Restaurant",
    image:
      "image/kania_restaurant.png",
  },
  R_ROEMAH_LANGKO: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Roemah Langko",
    image:
      "image/roemah_langko.jpg",
  },
  R_AYAM_TALIWANG_IRAMA: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Ayam Taliwang Irama",
    image:
      "image/ayam_taliwang_irama.jpg",
  },
  R_SATE_REMBIGA_UTAMA: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Sate Rembiga Utama",
    image:
      "image/sate_rembiga_utama.jpg",
  },
  R_NASI_BALAP_PUYUNG: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Nasi Balap Puyung",
    image:
      "image/nasi_balap_puyung.jpg",
  },
  R_TEMBERODOK_SAKRA: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Wisata Kuliner Temberodok Sakra",
    image:
      "image/kuliner_temberodok_sakra.jpeg",
  },
  R_SATE_TANJUNG: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Wisata Kuliner Sate Tanjung",
    image:
      "image/kuliner_sate_tanjung.jpg",
  },
  R_GILI_TRAWANGAN: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Gili Trawangan",
    image:
      "image/gili_trawangan.jpg",
  },
  R_GILI_AIR: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Gili Air",
    image:
      "image/gili_air.jpg",
  },
  R_GILI_MENO: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Gili Meno",
    image:
      "image/gili_meno.jpg",
  },
  R_GILI_SULAT: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Gili Sulat",
    image:
      "image/gili_sulat.jpg",
  },
  R_GILI_KEDIS: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Gili Kedis",
    image:
      "image/gili_kedis.png",
  },
  R_GILI_NANGGU: {
    rekomendasi:
      "Anda Sebaiknya Mengunjungi Gili Nanggu",
    image:
      "image/gili_nanggu.jpg",
  },
};
