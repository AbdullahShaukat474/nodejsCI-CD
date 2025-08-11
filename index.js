const express = require('express');

const app = express();
const PORT = 3000;

//Root route
app.get('/', (req, res) => {
    res.send('ya blue ka part bn jay ga . or new wala green me add ho jay ga');
});
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
