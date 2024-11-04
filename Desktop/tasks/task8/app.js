const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.send('All fields are required!');
    }
    res.send(`
        <h1>Thank You for Contacting Us!</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <a href="/contact">Go back to the contact form</a>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
