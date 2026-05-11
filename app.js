const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; text-align: center; margin-top: 100px; background: #0f172a; color: white;">
        <h1>🚀 My CI/CD Pipeline Project</h1>
        <p>Deployed automatically using GitHub Actions & Docker!</p>
        <p style="color: #94a3b8;">Built by: Devalapalli Vaishnavi| B.Tech Final Year</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});