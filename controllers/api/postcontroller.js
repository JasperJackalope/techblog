const Post = require('../../models/post');

const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  createPost,
  getPosts,
};
