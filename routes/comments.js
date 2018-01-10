module.exports = {
  getComments(req, res) {
    const post = req.store.posts[req.params.postId];
    res.status(200).send(post.comments)
  },
  addComment(req, res) {
    const comments = store.posts[req.params.postId].comments
    const id = req.store.posts[req.params.postId].comments.length;
    comments.push(req.body);
    res.status(201).send({id: id})
  },
  updateComment(req, res) {
    req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
    res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId])
  },
  removeComment(req, res) {
    req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1);
  }
}
