# 💌 Ucapan Ulang Tahun Interaktif

Website ucapan ulang tahun dengan React + Tailwind CSS + Framer Motion.
Alurnya: Amplop → Surat → Kilas Balik (9 foto) → Halaman Lagu → Penutup.

---

## 1. Jalankan di komputer kamu

Butuh [Node.js](https://nodejs.org) versi 18 ke atas.

```bash
npm install
npm run dev
```

Buka link yang muncul di terminal (biasanya `http://localhost:5173`).

---

## 2. Cara mengedit isi (teks, foto, lagu)

**Cukup buka satu file ini:** `src/data/content.js`

Semua teks, deskripsi foto, path foto, dan info lagu ada di sana, lengkap
dengan komentar penjelas di setiap bagian. Kamu tidak perlu menyentuh file
komponen lain untuk sekadar mengganti isi ucapan.

### Mengganti foto
1. Taruh foto kamu di folder `public/images/` (contoh: `foto-1.jpg`).
2. Di `src/data/content.js`, ganti nilai `src` pada bagian `kilasBalik.foto`
   dan `penutup.foto` dari link placeholder menjadi path lokal, misalnya:
   ```js
   { src: '/images/foto-1.jpg', deskripsi: 'Deskripsi foto kamu' }
   ```

### Mengganti lagu
1. Taruh file lagu di `public/music/` (contoh: `song.mp3`).
2. Di `src/data/content.js`, ubah `lagu.src` menjadi `/music/song.mp3`
   (atau nama file yang kamu pakai), dan ubah `lagu.judul` / `lagu.penyanyi`.

> Catatan soal autoplay: browser modern hanya mengizinkan audio diputar
> otomatis setelah ada interaksi pengguna. Musik akan mulai diputar tepat
> saat amplop diklik — ini sudah dihitung sebagai "interaksi", jadi seharusnya
> aman di sebagian besar browser. Kalau tetap diblokir, pengguna cukup
> menekan tombol play di widget piringan hitam.

### Mengganti nama / sapaan
Ubah `namaPanggilan` dan `namaPengirim` di bagian paling atas `content.js`.

### Mengganti warna & font
Palet warna dan tipografi diatur di `tailwind.config.js` (bagian `colors`
dan `fontFamily`). Font yang dipakai: **Playfair Display** (judul),
**Caveat** (teks surat, terasa seperti tulisan tangan), **Poppins** (UI).

---

## 3. Deploy ke GitHub Pages

### Langkah wajib: atur `base` di `vite.config.js`
Buka `vite.config.js`, ganti:
```js
base: '/nama-repo-kamu/',
```
dengan nama repository GitHub kamu. Contoh, kalau repo kamu di
`github.com/username/ucapan-untuk-dinda`, maka:
```js
base: '/ucapan-untuk-dinda/',
```

### Opsi A — Otomatis lewat GitHub Actions (disarankan)
1. Buat repository baru di GitHub, lalu push project ini ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Ucapan ulang tahun"
   git branch -M main
   git remote add origin https://github.com/username/nama-repo-kamu.git
   git push -u origin main
   ```
2. Di GitHub: masuk ke **Settings → Pages**, pada bagian **Build and
   deployment → Source**, pilih **GitHub Actions**.
3. Workflow di `.github/workflows/deploy.yml` sudah disiapkan — begitu kamu
   push ke `main`, situs otomatis ter-build dan ter-deploy.
4. Situs kamu akan tersedia di:
   `https://username.github.io/nama-repo-kamu/`

### Opsi B — Manual lewat package `gh-pages`
```bash
npm run deploy
```
Perintah ini akan build project lalu mem-push folder `dist` ke branch
`gh-pages`. Setelah itu, di **Settings → Pages**, pilih branch `gh-pages`
sebagai source.

---

## 4. Struktur project

```
├── index.html
├── vite.config.js         # atur "base" untuk GitHub Pages di sini
├── tailwind.config.js     # palet warna & font
├── src/
│   ├── main.jsx
│   ├── App.jsx            # navigasi antar halaman & audio
│   ├── index.css
│   ├── data/
│   │   └── content.js     # ⭐ EDIT DI SINI untuk ganti teks/foto/lagu
│   └── components/
│       ├── EnvelopeScene.jsx  # halaman amplop + surat
│       ├── Flashback.jsx      # halaman kilas balik (grid 9 foto)
│       ├── SongPage.jsx       # halaman lagu (setengah piringan hitam)
│       ├── ClosingPage.jsx    # halaman penutup
│       └── MusicPlayer.jsx    # widget piringan hitam mini
└── public/
    ├── images/            # taruh foto kamu di sini
    └── music/             # taruh lagu kamu di sini
```

Selamat mengedit, semoga pacarnya suka! 🎂✨
