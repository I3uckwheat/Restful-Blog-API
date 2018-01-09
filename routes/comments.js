module.exports = {
  getComments(req, res) {
    const post = store.posts[req.params.postId];
    res.status(200).send(post.comments)
  },
  addComment(req, res) {
    const comment = req.body
    const id = store.posts[req.params.postId].comments.length;
    store.posts[req.params.postId].comments[id] = comment;
    res.status(201).send({id: id})
  },
  updateComment(req, res) {
    store.posts[req.params.postId].comments[req.params.commentId] = req.body
    res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId])
  },
  removeComment(req, res) {
    store.posts[req.params.postId].comments.splice(req.params.commentId, 1);
  }
}
