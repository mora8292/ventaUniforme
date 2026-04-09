import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👇 esto permite cargar CSS, JS, imágenes, etc.
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));