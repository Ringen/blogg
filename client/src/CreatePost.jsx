// import { useEffect } from 'react';
import * as React from 'react';
import axios from 'axios';

function CreatePost() {

    const handleClick = async () => {
        const post = {
            id: '4',
            title: 'My FORTH post',
            preamble: 'This is just a short post',
            text: 'lorem ipsum dolor sit amet',
            author: 'Lisa Sterner',
            email: 'lisa.m.sterner@gmail.com',
            date: '2021-09-20',
          };

          await axios.post('/api/posts', post).then(res => {
              console.log(res);
          });
    }

  return (
    <button onClick={handleClick}>CREATE POST</button>
  );
}

export default CreatePost;
