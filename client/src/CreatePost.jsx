import { useState } from 'react';
import * as React from 'react';
import axios from 'axios';
import { Button, FormControl, TextField } from '@mui/material';

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

  const [showError, setShowError] = useState(false);

  return (
    <form>
      <div>
        <TextField
            required
            id="title"
            label="Title"
            fullWidth
            margin="normal"
        />
        <TextField
            required
            id="preamble"
            label="Preamble"
            fullWidth
            margin="normal"
            multiline
            rows={4}
        />
        <TextField
            required
            id="text"
            label="Text"
            fullWidth
            margin="normal"
            multiline
            rows={8}
        />
        <TextField
            required
            id="author"
            label="Author"
            margin="normal"
        />
        <TextField
            required
            id="email"
            label="E-mail"
            margin="normal"
        />
      </div>
      <Button variant="contained" type="submit" onClick={handleClick}>Create post</Button>
    </form>
  );
}

export default CreatePost;
