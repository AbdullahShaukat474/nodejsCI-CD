const express = require('express');

const app = express();
const PORT = 3000;

//Root route
app.get('/', (req, res) => {
    res.send('Hello World v3');
});
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
