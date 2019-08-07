const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/todo', (req, res) => {
    res.render('home', {
        list: [
            'get up',
            'survive',
            'go back to bed'
        ]
    })
});

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});