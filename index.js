import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Deshabilitar caché del navegador para archivos HTML (solo en desarrollo)
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// 👇 esto permite cargar CSS, JS, imágenes, etc.
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));