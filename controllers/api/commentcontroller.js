const updateComment = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedComment = await Comment.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(updatedComment);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  const deleteComment = async (req, res) => {
    try {
      const { id } = req.params;
      await Comment.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  module.exports = {
    createComment,
    getComments,
    updateComment,
    deleteComment,
  };
  
