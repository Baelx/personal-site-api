const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const db = require('./db');

const Post = require('./models/post');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
})

// Post route for posts
app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'Post added successfully',
            postId: createdPost._id
        })
    });
});

// Get route for posts
app.get('/api/posts', (req, res) => {
    // static method available from the mongoose Post class
    Post.find().then(documents => {
    res.status(200).json(documents);
    })
    .catch(() => {
        console.log('No documents found');
        
    });

})

// Delete route for posts
app.delete('/api/posts/:id', (req, res) => {
    Post.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: 'post deleted'});
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))