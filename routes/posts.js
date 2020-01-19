const express = require('express');
const router = express.Router();
const Post = require('../models/post');


// Post route for posts
router.post('', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        summary: req.body.summary,
        categories: req.body.categories,
        publishDate: req.body.publishDate,
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'Post added successfully',
            postId: createdPost._id
        })
    });
});

// Get route for posts
router.get('', (req, res) => {
    // static method available from the mongoose Post class
    Post.find().then(documents => {
    res.status(200).json(documents);
    })
    .catch(() => {
        console.log('No documents found');
        
    });

})

// Get single post
router.get('/:id', (req, res) => {
    // static method available from the mongoose Post class
    Post.find({_id: req.params.id}).then(document => {
        res.status(200).json(document);
        })
        .catch(() => {
            console.log('No post with that id found');
        });
})

// Delete route for posts
router.delete('/:id', (req, res) => {
    Post.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: 'post deleted'});
    })
})

module.exports = router;