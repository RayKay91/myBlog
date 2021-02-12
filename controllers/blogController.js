const Post = require('../models/postsModel');

const getAllPosts = async (req, res) => {
  try {
    const blogPosts = await Post.find().sort('-createdAt');
    res.render('posts', { blogPosts });
  } catch (err) {
    console.log(err);
    res.redirect('404');
  }
};

const getSinglePost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const blogPost = await Post.findById(post_id);
    res.render('post', { blogPost });
  } catch (err) {
    console.log(err);
    res.redirect('/404');
  }
};

const showCreatePostPage = (req, res) => {
  res.render('create-post');
};

const savePost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    post.save();
    res.redirect('/posts');
  } catch (err) {
    console.log(err);
    res.redirect('/404');
  }
};

const deletePost = (req, res) => {
  const { postId } = req.params;

  Post.findByIdAndRemove(postId, (err) => {
    if (!err) {
      console.log('item deleted');
      res.redirect('/posts');
    }
    if (err) {
      console.log(err);
    }
  });
};

const updatePost = (req, res) => {
  const { postId } = req.params;
  Post.findByIdAndUpdate(postId, req.body, (err, updated) => {
    if (!err) {
      res.redirect('/posts');
    } else {
      res.redirect('/404');
    }
  });
};

const showAboutPage = (req, res) => {
  res.render('about');
};

module.exports = {
  getAllPosts,
  getSinglePost,
  showCreatePostPage,
  savePost,
  deletePost,
  updatePost,
  showAboutPage,
};
