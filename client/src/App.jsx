import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Avatar, Box, Container, Typography } from '@mui/material';
import AllPosts from './AllPosts';
import CreatePost from './CreatePost';
import OnePost from './OnePost';

function App() {
  return (
    <Container maxWidth="sm">
      <Router>
        <Box sx={{ height: '4rem', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Avatar sx={{ bgcolor: '#24b7b0' }}>LS</Avatar>
          <Typography sx={{ minWidth: 100 }}><NavLink to="/">Home</NavLink></Typography>
          <Typography sx={{ minWidth: 100 }}><NavLink to="/create">Create</NavLink></Typography>
        </Box>
        <Switch>
          <Route path="/" exact><AllPosts /></Route>
          <Route path="/create" exact><CreatePost /></Route>
          <Route path="/posts" exact><AllPosts /></Route>
          <Route path="/posts/:id"><OnePost /></Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
