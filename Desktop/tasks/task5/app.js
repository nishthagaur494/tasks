const express = require("express")
const app = express()
const PORT = 8800

app.set('view engine', 'ejs');
app.get('/search', (req, res) => {
    const query = req.query.q || '';
    const results = [
        'Movie 1: Dhoom,',
        'Movie 2: Sultan',
        'Movie 3 : Namaste London',
        'Movie 4: Gunday',
        'Movie 5 : Sholy'
    ].filter(item => item.toLowerCase().includes(query.toLowerCase()));

    res.render('search', { query, results });
});

app.listen(PORT, () =>{
    console.log(`Listening to ${PORT}`);
})