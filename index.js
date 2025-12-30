// Import package yang dibutuhkan
const express = require('express');
const mysql = require('mysql2');
const app = express();

// Konfigurasi koneksi ke database MySQL / MariaDB
const db = mysql.createConnection({
  host: 'localhost',          // untuk Render + Hybrid ubah ke IP server lokal kamu
  user: 'clouduser',
  password: '12345',
  database: 'cloud_integration'
});

// Tes koneksi database
db.connect(err => {
  if (err) {
    console.error('❌ Gagal konek ke database:', err.message);
    return;
  }
  console.log('✅ Database connected');
});

// === ROUTE UTAMA ===
// Akses di: https://<nama-app>.onrender.com/
app.get('/', (req, res) => {
  res.send('🚀 Cloud Integration API running successfully on Render!');
});

// === ROUTE TAMBAHAN (opsional, contoh) ===
app.get('/status', (req, res) => {
  res.json({ status: 'ok', message: 'Server berjalan normal ✅' });
});

// Gunakan port otomatis dari Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
