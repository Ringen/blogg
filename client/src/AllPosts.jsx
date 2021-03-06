import { useEffect, useState } from 'react';
import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

function AllPosts() {
  const [allPosts, setAllPosts] = useState([]);

  const fetchAllPosts = async () => {
    try {
        const { data } = await axios.get('/api/posts');
        setAllPosts(data);
    } catch (error) {
        console.error(error);
    }
  };

  useEffect(() => fetchAllPosts(), []);

  return (
    <div>{allPosts.map((post) => {
        const linkPath = `/posts/${post.id}`;
        return (
          <Link key={post.id} to={linkPath}>
            <Paper elevation={3} sx={{ marginBottom: '1rem', padding: '1rem 2rem' }}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </Paper>
          </Link>
        );
    })}</div>
  );
}

export default AllPosts;
