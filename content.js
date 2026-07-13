// =====================================================================
// SEMUA TEKS, FOTO, DAN LAGU DIATUR DI SINI.
// Kamu tidak perlu menyentuh file lain untuk mengganti isi ucapan ini.
// Baca komentar di setiap bagian untuk tahu apa yang boleh diganti.
// =====================================================================

const content = {
  // Nama yang dipakai di beberapa tempat (sapaan singkat)
  namaPanggilan: 'Sayangku',
  namaPengirim: 'Mas',

  // ---------------------------------------------------------------
  // HALAMAN 1: Teks di sampul amplop sebelum dibuka
  // ---------------------------------------------------------------
  amplop: {
    label: 'Untuk kamu, yang paling kusayang',
    instruksi: 'Ketuk amplopnya, ya',
  },

  // ---------------------------------------------------------------
  // HALAMAN 1: Isi surat (boleh tambah/kurang paragraf sesuka hati)
  // ---------------------------------------------------------------
  surat: {
    judul: 'Selamat Ulang Tahun, Sayangku 🎂',
    paragraf: [
      'Hari ini hari yang spesial, karena hari ini dunia pernah kedatangan kamu.',
      'Aku cuma mau bilang, makasih ya udah jadi kamu — yang selalu sabar, yang selalu bikin hari-hari mas lebih hangat, dan yang selalu punya tempat paling nyaman buat mas pulang.',
      'Semoga di umur yang baru ini, semua yang kamu perjuangkan pelan-pelan sampai ke tujuannya. Semoga kamu makin sehat, makin bahagia, dan makin sayang sama diri kamu sendiri.',
      'Dan kalau boleh sedikit egois, semoga di setiap babak baru hidup kamu, masih ada mas di sana — jadi tempat cerita, tempat pulang, dan tempat kamu bisa jadi diri sendiri.',
      'Selamat ulang tahun, cintaku. Ini baru permulaan — masih ada beberapa kejutan lagi di bawah ini.',
    ],
    tombolLanjut: 'Lihat Kilas Balik',
  },

  // ---------------------------------------------------------------
  // MUSIK — putar otomatis saat amplop dibuka
  // Ganti "src" dengan path lagu kamu di folder public/music/
  // Contoh: taruh file di public/music/lagu-kita.mp3 lalu ganti
  // src menjadi '/music/lagu-kita.mp3'
  // ---------------------------------------------------------------
  lagu: {
    judul: 'Perfect',
    penyanyi: 'Ed Sheeran',
    src: '/music/song.mp3',
    // Kalimat yang mendeskripsikan kenapa lagu ini relevan
    deskripsiHalamanLagu:
      'Lagu ini selalu mengingatkan mas sama kamu — tiap liriknya kayak lagi cerita soal kita.',
  },

  // ---------------------------------------------------------------
  // HALAMAN 2: Kilas Balik — 9 foto + deskripsi
  // Ganti "src" ke path foto kamu (taruh di public/images/ lalu
  // tulis path-nya, misal '/images/foto-1.jpg'). Selama belum
  // diganti, akan tampil foto placeholder berwarna senada tema.
  // ---------------------------------------------------------------
  kilasBalik: {
    judul: 'Kilas Balik Kita',
    subjudul: 'Beberapa momen yang mas simpan baik-baik',
    foto: [
      { src: 'https://placehold.co/500x650/241A2E/E7C9A0?text=Foto+1', deskripsi: 'Pertama kali ketemu, mas udah deg-degan duluan.' },
      { src: 'https://placehold.co/500x650/241A2E/E7C9A0?text=Foto+2', deskripsi: 'Kencan pertama yang canggung tapi berkesan.' },
      { src: 'https://placehold.co/500x650/241A2E/E7C9A0?text=Foto+3', deskripsi: 'Waktu kamu ketawa sampai lupa difoto candid.' },
      { src: 'https://placehold.co/500x650/241A2E/E7C9A0?text=Foto+4', deskripsi: 'Liburan kecil-kecilan yang berasa besar banget.' },
      { src: 'https://placehold.co/500x650/241A2E/E7C9A0?text=Foto+5', deskripsi: 'Malam kita begadang cerita sampai lupa waktu.' },
      { src: 'https://placehold.co/500x650/241A2E/E7C9A0?text=Foto+6', deskripsi: 'Waktu kamu masakin mas walau agak gosong.' },
      { src: 'https://placehold.co/500x650/241A2E/E7C9A0?text=Foto+7', deskripsi: 'Perayaan kecil yang jadi kenangan besar.' },
      { src: 'https://placehold.co/500x650/241A2E/E7C9A0?text=Foto+8', deskripsi: 'Hari biasa yang jadi istimewa karena ada kamu.' },
      { src: 'https://placehold.co/500x650/241A2E/E7C9A0?text=Foto+9', deskripsi: 'Dan masih banyak lagi cerita yang akan kita tulis.' },
    ],
    tombolLagu: 'Lagu yang mencerminkan sayangku',
  },

  // ---------------------------------------------------------------
  // HALAMAN 4: Penutup
  // ---------------------------------------------------------------
  penutup: {
    teks: 'Happy birthday sayangku, mas selalu sayang dan cinta tak terhingga sama cintaku.',
    foto: [
      'https://placehold.co/500x650/1B1523/F2C9C0?text=Kita+%231',
      'https://placehold.co/500x650/1B1523/F2C9C0?text=Kita+%232',
    ],
  },
}

export default content
