const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let posts = [
    { id: 1, title: 'First Post', body: 'Hi Welcome to my BLOG' },
    { id: 2, title: 'Second Post', body: 'Again Welcome to my BLOG' }
];


app.get('/posts', (req, res) => {
    res.render('posts', { posts });
});


app.get('/new-post', (req, res) => {
    res.render('new-post');
});

app.post('/new-post', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        body: req.body.body
    };
    posts.push(newPost);
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    
    if (post) {
        res.render('post-detail', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});
