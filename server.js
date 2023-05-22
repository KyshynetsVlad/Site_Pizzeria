const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Задаємо шлях до статичних файлів (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для головної сторінки
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Слухаємо на порту 3000
app.listen(port, () => {
  console.log(`Сервер запущений на порті ${port}`);
});
