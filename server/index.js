const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

const posts = [
  {
    id: '0',
    title: 'My FIRST post',
    preamble: 'This is just a short post',
    text: 'lorem ipsum dolor sit amet',
    author: 'Lisa Sterner',
    email: 'lisa.m.sterner@gmail.com',
    date: '2021-09-20',
  },
  {
    id: '1',
    title: 'My SECOND post',
    preamble: 'This is just a short post',
    text: 'lorem ipsum dolor sit amet',
    author: 'Lisa Sterner',
    email: 'lisa.m.sterner@gmail.com',
    date: '2021-09-20',
  },
  {
    id: '2',
    title: 'My THIRD post',
    preamble: 'This is just a short post',
    text: 'lorem ipsum dolor sit amet',
    author: 'Lisa Sterner',
    email: 'lisa.m.sterner@gmail.com',
    date: '2021-09-20',
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
  await posts.push(req.body);
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
