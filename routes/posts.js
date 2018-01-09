module.exports = {
  getPosts(req, res) {
    res.status(200).send(req.store.posts)
  },
  addPost(req, res) {
    const newPost = req.body
    const id = store.posts.length
    store.posts.push(newPost);
    res.status(201).send({id: id});
  },
  updatePost(req, res) {
    const post = store.posts[req.params.id]
  },
  removePost(req, res) {

  }
}
