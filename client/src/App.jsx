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
        <Box component="header" sx={{ height: '4rem', display: 'flex', alignItems: 'center' }}>
          <h1><Avatar sx={{ bgcolor: '#24b7b0' }}>LS</Avatar></h1>
          <Box component="nav" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Typography sx={{ minWidth: 100 }}><NavLink to="/">Home</NavLink></Typography>
              <Typography sx={{ minWidth: 100 }}><NavLink to="/create">Create</NavLink></Typography>
          </Box>
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
