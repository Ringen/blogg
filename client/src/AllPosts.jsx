import { useEffect, useState } from 'react';
import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        return <Link to={linkPath}>{post.title}</Link>
    })}</div>
  );
}

export default AllPosts;
