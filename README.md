# Birthday Website 🎂💕

Website ulang tahun yang cute dan romantic dengan React + Tailwind CSS.

## ✨ Fitur

- 🔐 **Passcode Lock** - Halaman password dengan keypad angka
- 💕 **8 Halaman Interaktif** - Flow cerita yang menarik
- 🎵 **Music Toggle** - Tombol floating untuk play/pause musik
- 🎊 **Confetti Animation** - Animasi hati & bintang jatuh
- 🎨 **Design Soft & Minimal** - Warna biru soft dengan banyak whitespace
- ⚡ **Smooth Transitions** - Animasi fade & scale antar halaman

## 🚀 Cara Install

### 1. Install Dependencies

```bash
cd birthday-react-app
npm install
```

### 2. Jalankan Development Server

```bash
npm start
```

Website akan terbuka di `http://localhost:3000`

### 3. Build untuk Production

```bash
npm run build
```

## 🎨 Struktur Project

```
birthday-react-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── FloatingMusicButton.jsx  # Tombol musik floating
│   │   ├── PrimaryButton.jsx        # Button utama
│   │   └── Confetti.jsx             # Animasi confetti
│   ├── pages/
│   │   ├── PasscodePage.jsx         # Halaman 1: Password
│   │   ├── HiPrettyPage.jsx         # Halaman 2: Greeting
│   │   ├── BirthdayPage.jsx         # Halaman 3: Birthday announcement
│   │   ├── MemoryPage.jsx           # Halaman 4: Foto memory
│   │   ├── SpotifyMiniPage.jsx      # Halaman 5: Playlist mini
│   │   ├── SpotifyFullPage.jsx      # Halaman 6: Playlist full
│   │   ├── IntroPage.jsx            # Halaman 7: Intro letter
│   │   └── LetterPage.jsx           # Halaman 8: Surat lengkap
│   ├── App.js                       # Main app dengan navigasi
│   ├── index.js                     # Entry point
│   └── index.css                    # Tailwind & custom styles
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ⚙️ Customization

### 1. Ganti Password

Edit file `src/pages/PasscodePage.jsx` baris 6:

```javascript
const correctPasscode = '180207'; // Ganti dengan tanggal lahir (DDMMYY)
```

### 2. Tambah Foto

Edit file `src/pages/MemoryPage.jsx`:

```jsx
// Ganti emoji dengan <img>
<img src="/path-to-your-photo.jpg" alt="Memory" className="w-full rounded-lg mb-4" />
```

### 3. Edit Surat

Edit file `src/pages/LetterPage.jsx` - ganti semua paragraf sesuai keinginan

### 4. Tambah Musik

1. Taruh file musik di folder `public/` (misal: `music.mp3`)
2. Edit `src/App.js` baris 70:

```jsx
<audio ref={audioRef} loop>
  <source src="/music.mp3" type="audio/mpeg" />
</audio>
```

### 5. Ganti Warna

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#224E9B',  // Warna utama
    light: '#6B87B8',    // Warna medium
    lighter: '#9BABC9',  // Warna light
  },
  bg: {
    DEFAULT: '#F5F8FF',  // Background utama
    secondary: '#F7FAFF', // Background secondary
  }
}
```

### 6. Tambah/Edit Playlist Spotify

Edit `src/pages/SpotifyMiniPage.jsx` dan `SpotifyFullPage.jsx`:

```jsx
<li className="py-3 border-b border-white/10 text-sm">
  🎵 Song Name Here
</li>
```

## 🎯 Tips

- **Emoji Karakter**: Ganti emoji di setiap halaman (🐱, 🎂, 💑, dll)
- **Font**: Sudah pakai Poppins dari Google Fonts (rounded & friendly)
- **Responsive**: Semua halaman sudah responsive untuk mobile
- **Animasi**: Smooth transitions sudah built-in

## 📱 Deploy

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload folder 'build' ke Netlify
```

### GitHub Pages

1. Install gh-pages: `npm install gh-pages --save-dev`
2. Tambah di `package.json`:
```json
"homepage": "https://yourusername.github.io/birthday-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Run: `npm run deploy`

## 💝 Preview Flow

1. **Passcode** → Tebak password (birthday)
2. **Hi Pretty** → Greeting dengan emoji 🫶
3. **Birthday** → Ucapan ulang tahun ke-18
4. **Memory** → Card foto polaroid
5. **Spotify Mini** → List 3 lagu
6. **Spotify Full** → Full playlist card
7. **Intro** → Transisi ke surat
8. **Letter** → Surat lengkap + confetti jatuh

## 🐛 Troubleshooting

**Error saat npm install:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 sudah terpakai:**
```bash
# Windows
set PORT=3001 && npm start

# Mac/Linux
PORT=3001 npm start
```

## 📄 License

Personal use only - dibuat dengan 💙

---

Made with love using React ⚛️ + Tailwind CSS 🎨
