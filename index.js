const express = require('express');

const app = express();
const PORT = 3000;

//Root route
app.get('/', (req, res) => {
    res.send('abi hum blue version v1 sai sy run kry gy ');
});
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
