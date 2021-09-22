import * as React from 'react';
import { Button, TextField } from '@mui/material';
import { useFormControls } from './CreatePostControls';

function CreatePost() {
  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  } = useFormControls();

  // this could be cleaned up to be more DRY but let's not do that :)
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            margin="normal"
            onChange={handleInputValue}
            onBlur={handleInputValue}
            error={!!errors['title']}
            {...(errors['title'] && {
              error: true,
              helperText: errors['title']
            })}
        />
        <TextField
            required
            id="preamble"
            name="preamble"
            label="Preamble"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            error={!!errors['preamble']}
            {...(errors['preamble'] && {
              error: true,
              helperText: errors['preamble']
            })}
        />
        <TextField
            required
            id="text"
            name="text"
            label="Text"
            fullWidth
            margin="normal"
            multiline
            rows={8}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            error={!!errors['text']}
            {...(errors['text'] && {
              error: true,
              helperText: errors['text']
            })}
        />
        <TextField
            required
            id="author"
            name="author"
            label="Author"
            margin="normal"
            onChange={handleInputValue}
            onBlur={handleInputValue}
            error={!!errors['author']}
            {...(errors['author'] && {
              error: true,
              helperText: errors['author']
            })}
        />
        <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            margin="normal"
            onChange={handleInputValue}
            onBlur={handleInputValue}
            error={!!errors['email']}
            {...(errors['email'] && {
              error: true,
              helperText: errors['email']
            })}
        />
      </div>
      <Button disabled={!formIsValid()} variant="contained" type="submit">Create post</Button>
    </form>
  );
}

export default CreatePost;
