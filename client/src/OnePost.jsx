import { useEffect, useState } from 'react';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Paper, Typography } from '@mui/material';

const OnePost = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();

    const fetchPost = async () => {
      try {
          const { data } = await axios.get(`/api/posts/${id}`);
          setPost(data);
      } catch (error) {
          console.error(error);
      }
    };

    useEffect(() => fetchPost());

  return (
    <Paper component="article" open elevation={3} sx={{ padding: '1rem 2rem' }}>
      <h2>{post.title}</h2>
      <Typography sx={{ fontStyle: 'italic' }}>{post.preamble}</Typography>
      <p>{post.text}</p>
      <footer>
        <Typography sx={{ fontSize: '0.875rem', marginTop: '2rem' }}>Written by <a href={`mailto:${post.email}`}>{post.author}</a> @ {post.date}</Typography>
      </footer>
    </Paper>
  );
};

export default OnePost;
