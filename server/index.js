const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

// save the posts locally in application memory
// add one default blog post to start with
const posts = [
  {
    id: '1',
    title: 'Hello world!',
    preamble: 'Welcome to my hoods.',
    text: 'This is a dummy post to make sure there is some content :)',
    author: 'Lisa Sterner',
    email: 'lisa.m.sterner@gmail.com',
    date: 'Wed Sep 22 2021',
  },
];

const getPostById = (id) => posts.find((post) => post.id === id);

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const post = getPostById(req.params.id);
  res.json(post);
});

app.post('/api/posts', async (req, res) => {
  await posts.push({
    ...req.body,
    id: (posts.length + 1).toString(),
    date: new Date().toDateString(),
  });
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
