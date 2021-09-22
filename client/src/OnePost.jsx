import { useEffect, useState } from 'react';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OnePost = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();

    console.log('client id', id);
    
    const fetchPost = async () => {
      try {
          const { data } = await axios.get(`/api/posts/${id}`);
          setPost(data);
      } catch (error) {
          console.error(error);
      }
    };

    useEffect(() => fetchPost(), []);

  return (
    <div>{post.title}</div>
  );
};

export default OnePost;
