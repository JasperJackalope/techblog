const Comment = require('../../models/comment');

const createComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  createComment,
  getComments,
};
