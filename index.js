const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'clouduser',
  password: '12345',
  database: 'cloud_integration'
});

db.connect(err => {
  if (err) {
    console.error('❌ Gagal konek ke database:', err.message);
    return;
  }
  console.log('✅ Database connected');
});

// === ini bagian penting ===
app.get('/', (req, res) => {
  res.send('🚀 Cloud Integration API running successfully on Render!');
});
// ===========================

// Gunakan port otomatis dari Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
