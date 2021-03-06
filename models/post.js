const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    summary: { type: String, required: true},
    category: { type: String, required: true },
    publishDate: { type: Date, required: true }
});

module.exports = mongoose.model('Post', postSchema);