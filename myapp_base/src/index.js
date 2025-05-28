const express = require("express");
const pool = require("./db");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/products", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM products");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
