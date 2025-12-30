const express = require('express');
const mysql = require('mysql2');
const app = express();

// Koneksi ke MariaDB lokal
const db = mysql.createConnection({
  host: 'localhost',
  user: 'clouduser',
  password: '12345',
  database: 'cloud_integration'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.message);
    return;
  }
  console.log('✅ Database connected');
});

app.get('/', (req, res) => {
  res.send('🚀 Cloud Integration API running on local VPS!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
