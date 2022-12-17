const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express 6');
});
app.listen(3001, () => {
    console.log('Server running at port 3001');
});