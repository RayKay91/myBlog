const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const blogController = require('./controllers/blogController');
const app = express();
mongoose.connect(
  process.env.MONGODB_URI,

  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/posts', blogController.getAllPosts);

app.get('/posts/:post_id', blogController.getSinglePost);

app
  .route('/create-post')
  .get(blogController.showCreatePostPage)
  .post(blogController.savePost);

app.delete('/post/delete/:postId', blogController.deletePost);

app.post('/post/update/:postId', blogController.updatePost);

app.get('/about', blogController.showAboutPage);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(process.env.PORT || 8888, () => console.log('server listening'));
